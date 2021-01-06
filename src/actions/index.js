import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_FALLIDO':
      return {
        ...state,
        loginStatus: false,
        loading: false,
        fallo: true,
      };
    case 'LOGOUT_FALLIDO':
      return {
        ...state,
        loading: false,
        fallo: true,
      };
    case 'LOGIN_EXITOSO':
      return {
        ...state,
        loginStatus: true,
        userName: action.userName,
        loading: false,
        fallo: false,
      };
    case 'LOGOUT_EXITOSO':
      return {
        state: initialState,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
        fallo: false,
      };
    case 'MSYS_GET':
      return {
        ...state,
        sistemas: action.MSYS,
      };
    case 'MACCS_GET':
      return {
        ...state,
        cuentas: action.MACCs,
      };
    case 'REQS_GET':
      return {
        ...state,
        requests: action.REQs,
      };
  }
  return state;
};

export default rootReducer;
