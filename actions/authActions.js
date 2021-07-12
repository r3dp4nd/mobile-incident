import AsyncStorage from '@react-native-async-storage/async-storage';
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

//#region Login
export function loginActions(auth) {
  return async (dispatch) => {
    dispatch(login());
    try {
      console.log(auth, 'Desde Login Actions');

      const {
        data: {
          body: { token },
        },
      } = await clientAxios.post('/auth/login', auth);

      await AsyncStorage.setItem('token', token);

      await dispatch(loginSuccess(token));

      dispatch(getUserAuthenticateAction());
    } catch (error) {
      console.log(error);
      // const alerta = {
      //   msg: error.response.data.body.msg,
      //   categoria: '',
      // };

      // dispatch(loginError(true, alerta));
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

const loginError = (estado, alerta) => ({
  type: LOGIN_ERROR,
  payload: { estado, alerta },
});
//#endregion

//#region OBTENER USUARIO
export function getUserAuthenticateAction() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      tokenAuth(token);
    }

    console.log('obteniendo el usuario')

    try {
      const respuesta = await clientAxios.get('/auth/login');
      console.log(respuesta.data.body,'Obteniendo datos del usuario');
      dispatch(setUser(respuesta.data.body));
    } catch (error) {
      console.log(error);
      dispatch(loginError());
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
    dispatch(updatePassword());

    console.log(newPass, 'Actualizando usuario');
    try {
      const result = await clientAxios.put('/auth/login/1', newPass);
      console.log(result.data);
      dispatch(updatePasswordSuccess());
    } catch (error) {
      console.log(error);
      dispatch(updatePasswordError(true));
    }
  };
}

const updatePassword = () => ({
  type: UPDATE_AUTH,
});

const updatePasswordSuccess = () => ({
  type: UPDATE_AUTH_SUCCESS,
});

const updatePasswordError = (estado) => ({
  type: UPDATE_AUTH_ERROR,
  payload: estado,
});
//#endregion
