import clientAxios from '../config/axios';
import {
  ADD_INCIDENT,
  ADD_INCIDENT_ERROR,
  ADD_INCIDENT_SUCCESS,
} from '../types';

export function registerIncidentActions(data) {
  return async (dispatch) => {
    dispatch(registerIncident(true));

    const incident = {
      codRouting: data.codRouting,
      incidenteCategory: data.categoryIncident,
      incidenceType: data.typeIncident,
      description: data.incidentDescription,
    };

    // console.log(incident);

    try {
      const {
        data: { body },
      } = await clientAxios.post('/incident', incident);

      console.log(body, 'Incidente Creador');

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
