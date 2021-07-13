import clientAxios from '../config/axios';
import { GET_ROUTING, GET_ROUTING_ERROR, GET_ROUTING_SUCCESS } from '../types';

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
