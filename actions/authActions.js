import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'native-base';
import clientAxios from '../config/axios';
import tokenAuth from '../config/token';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_USER,
  UPDATE_AUTH,
  UPDATE_AUTH_ERROR,
  UPDATE_AUTH_SUCCESS,
} from '../types';
import { getRoutingActions } from './routingActions';

//#region Login
export function loginActions(auth) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const {
        data: {
          body: { token },
        },
      } = await clientAxios.post('/auth/login', auth);

      await AsyncStorage.setItem('token', token);

      await dispatch(loginSuccess(token));

      dispatch(getUserAuthenticateAction());
    } catch (error) {
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });

      dispatch(loginError(true));
    }
  };
}

const login = () => ({
  type: LOGIN,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginError = (estado) => ({
  type: LOGIN_ERROR,
  payload: estado,
});
//#endregion

//#region OBTENER USUARIO
export function getUserAuthenticateAction() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clientAxios.get('/auth/login');
      dispatch(setUser(respuesta.data.body));

      dispatch(getRoutingActions(respuesta.data.body.codUser));
    } catch (error) {
      dispatch(loginError());

      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
    }
  };
}

const setUser = (usuario) => ({
  type: SET_USER,
  payload: usuario,
});
// #endregion

// #region Actulizar contraseña
export function updatePasswordAction(newPass) {
  return async (dispatch) => {
    dispatch(updatePassword(true));

    try {
      const result = await clientAxios.put('/auth/login/1', newPass);
      dispatch(updatePasswordSuccess());

      Toast.show({
        text: 'Se actualizo correctamente el usuario',
        duration: 3000,
        type: 'success',
      });
    } catch (error) {
      dispatch(updatePasswordError(true));
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
    }
  };
}

const updatePassword = (estado) => ({
  type: UPDATE_AUTH,
  payload: estado,
});

const updatePasswordSuccess = () => ({
  type: UPDATE_AUTH_SUCCESS,
});

const updatePasswordError = (estado) => ({
  type: UPDATE_AUTH_ERROR,
  payload: estado,
});
//#endregion
