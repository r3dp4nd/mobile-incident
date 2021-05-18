import {
  ADD_INCIDENT,
  ADD_INCIDENT_ERROR,
  ADD_INCIDENT_SUCCESS,
} from "../types";

export function registerIncidentActions(data) {
  return (dispatch) => {
    dispatch(registerIncident(true));

    try {
      dispatch(registerIncidentSuccess());
    } catch (error) {
      console.log(error);

      dispatch(registerIncidentError(true));
    }
  };
}

const registerIncident = (estado) => ({
  type: ADD_INCIDENT,
  payload: estado,
});

const registerIncidentSuccess = (data) => ({
  type: ADD_INCIDENT_SUCCESS,
});

const registerIncidentError = (estado) => ({
  type: ADD_INCIDENT_ERROR,
  payload: estado,
});
