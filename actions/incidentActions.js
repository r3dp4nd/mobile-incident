import { Toast } from 'native-base';
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


    try {
      const {
        data: { body },
      } = await clientAxios.post('/incident', incident);


      dispatch(registerIncidentSuccess());

      Toast.show({
        text: 'Se registro el incidente correctamente',
        duration: 3000,
        type: 'success',
      });
    } catch (error) {

      dispatch(registerIncidentError(true));
      Toast.show({
        text: error.response.data.body.msg,
        duration: 3000,
        type: error.response.data.body.status === 500 ? 'danger' : 'warning',
      });
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
