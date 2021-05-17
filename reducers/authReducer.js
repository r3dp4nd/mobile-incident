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
    default:
      return state;
  }
};
