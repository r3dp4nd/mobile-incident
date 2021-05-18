import { GET_ROUTING, GET_ROUTING_ERROR, GET_ROUTING_SUCCESS } from "../types";

export function getRoutingActions() {
  return (dispatch) => {
    dispatch(getRouting(true));

    try {
      dispatch(getRoutingSuccess(true));
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
