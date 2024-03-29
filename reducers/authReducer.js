import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_USER,
  UPDATE_AUTH,
  UPDATE_AUTH_SUCCESS,
  UPDATE_AUTH_ERROR,
  RESET_AUTH,
} from '../types';

const initialState = {
  token: null,
  autenticado: null,
  usuario: null,
  loading: false,
  error: null,
  mensaje: null,
  cargando: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case UPDATE_AUTH:
      return {
        ...state,
        loading: payload,
      };

    case LOGIN_ERROR:
    case UPDATE_AUTH_ERROR:
      return {
        ...state,
        error: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        autenticado: true,
        token: payload,
        loading: false,
      };

    case UPDATE_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SET_USER:
      return {
        ...state,
        usuario: payload,
      };

    case RESET_AUTH:
      return {
        ...state,
        token: null,
        autenticado: null,
        usuario: null,
        loading: false,
        error: null,
        mensaje: null,
        cargando: true,
      };

    default:
      return state;
  }
};
