import actionTypes from '../actionTypes';

export const signupSagaAC = (obj) => ({
  type: actionTypes.SIGNUP_SAGA,
  payload: { obj }
});

export const loginSagaAC = (obj) => ({
  type: actionTypes.LOGIN_SAGA,
  payload: obj
});
export const loginAC = (obj, token) => ({
  type: actionTypes.LOGIN_AUTH,
  payload: { ...obj, token: token.token }
});
export const logoutAC = () => ({
  type: actionTypes.LOGOUT_AUTH
});
