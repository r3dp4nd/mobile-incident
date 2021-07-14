import clientAxios from '../config/axios';
import {
  GET_ROUTING,
  GET_ROUTING_ERROR,
  GET_ROUTING_SUCCESS,
  UPDATE_ROUTING,
  UPDATE_ROUTING_SUCCESS,
  UPDATE_ROUTING_ERROR,
} from '../types';

export function getRoutingActions(id) {
  return async (dispatch) => {
    dispatch(getRouting(true));

    try {
      const result = await clientAxios.get(`/routing/${id}`);
      // console.log(result.data.body);
      dispatch(getRoutingSuccess(result.data.body));
    } catch (error) {
      console.log(error);
      dispatch(getRoutingError(true));
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

    console.log(data);

    try {
      const result = await clientAxios.put(`/routing/time/${1}`, data);
      console.log(result.data.body);

      dispatch(startUpdateTimeSuccess(result.data.body));
    } catch (error) {
      console.log(error);

      dispatch(startUpdateTimeError(false));
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
      const result = await clientAxios.put(`/routing/time/${2}`, data);
      console.log(result.data.body);

      dispatch(endUpdateTimeSuccess(result.data.body));
    } catch (error) {
      console.log(error);

      dispatch(endUpdateTimeError(false));
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
