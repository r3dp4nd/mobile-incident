import {
  ADD_INCIDENT,
  ADD_INCIDENT_ERROR,
  ADD_INCIDENT_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_INCIDENT:
      return {
        ...state,
        loading: payload,
      };

    case ADD_INCIDENT_ERROR:
      return {
        ...state,
        error: payload,
      };

      case ADD_INCIDENT_SUCCESS:
        return {
          ...state,
          loading: false,
        };

    default:
      return state;
  }
};
