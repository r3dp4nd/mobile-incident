import { Toast } from 'native-base';
import clientAxios from '../config/axios';
import {
  GET_ROUTING,
  GET_ROUTING_ERROR,
  GET_ROUTING_SUCCESS,
  UPDATE_ROUTING,
  UPDATE_ROUTING_SUCCESS,
  UPDATE_ROUTING_ERROR,
  RESET_ROUTING,
} from '../types';

export function getRoutingActions(id) {
  return async (dispatch) => {
    dispatch(getRouting(true));

    try {
      const result = await clientAxios.get(`/routing/${id}`);
      dispatch(getRoutingSuccess(result.data.body));
    } catch (error) {
      console.log(error);
      dispatch(getRoutingError(true));
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
    }
  };
}

const getRouting = (estado) => ({
  type: GET_ROUTING,
  payload: estado,
});

const getRoutingSuccess = (data) => ({
  type: GET_ROUTING_SUCCESS,
  payload: data,
});

const getRoutingError = (estado) => ({
  type: GET_ROUTING_ERROR,
  payload: estado,
});

export function startUpdateTimeAction(codRouting) {
  return async (dispatch) => {
    dispatch(startUpdateTime(true));

    const data = {
      codRouting,
    };

    try {
      const result = await clientAxios.put(`/routing/time/${'1'}`, data);

      dispatch(startUpdateTimeSuccess(result.data.body));

      Toast.show({
        text: 'Se inicio la ruta correctamente',
        duration: 3000,
        type: 'success',
      });
    } catch (error) {
      console.log(error);

      dispatch(startUpdateTimeError(false));
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
    }
  };
}

const startUpdateTime = (estado) => ({
  type: UPDATE_ROUTING,
  payload: estado,
});
const startUpdateTimeSuccess = (data) => ({
  type: UPDATE_ROUTING_SUCCESS,
  payload: data,
});
const startUpdateTimeError = (estado) => ({
  type: UPDATE_ROUTING_ERROR,
  payload: estado,
});

export function endUpdateTimeAction(codRouting) {
  return async (dispatch) => {
    dispatch(endUpdateTime(true));

    const data = {
      codRouting,
    };

    try {
      const result = await clientAxios.put(`/routing/time/${'2'}`, data);

      dispatch(endUpdateTimeSuccess(result.data.body));

      Toast.show({
        text: 'Se finalizo la ruta correctamente',
        duration: 3000,
        type: 'success',
      });
    } catch (error) {
      console.log(error);

      dispatch(endUpdateTimeError(false));
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
    }
  };
}

const endUpdateTime = (estado) => ({
  type: UPDATE_ROUTING,
  payload: estado,
});
const endUpdateTimeSuccess = (data) => ({
  type: UPDATE_ROUTING_SUCCESS,
  payload: data,
});
const endUpdateTimeError = (estado) => ({
  type: UPDATE_ROUTING_ERROR,
  payload: estado,
});

export function resetRoutingAction() {
  return (dispatch) => {
    dispatch(resetRouting());
  };
}

const resetRouting = () => ({
  type: RESET_ROUTING,
});
