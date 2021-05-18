import {
  GET_ROUTING,
  GET_ROUTING_ERROR,
  GET_ROUTING_SUCCESS,
  GET_UPDATEROUTING,
  UPDATE_ROUTING,
  UPDATE_ROUTING_ERROR,
  UPDATE_ROUTING_SUCCESS,
} from "../types";

const initialState = {
  routing: null,
  loading: false,
  error: null,
  getrouting: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROUTING:
    case UPDATE_ROUTING:
      return {
        ...state,
        loading: payload,
      };

    case GET_ROUTING_ERROR:
    case UPDATE_ROUTING_ERROR:
      return {
        ...state,
        error: payload,
      };

    case GET_ROUTING_SUCCESS:
      return {
        ...state,
        routing: payload,
      };

    case GET_UPDATEROUTING:
      return {
        ...state,
        getrouting: payload,
      };

    case UPDATE_ROUTING_SUCCESS:
      return {
        ...state,
        routing: payload,
      };

    default:
      return state;
  }
};
