import actionTypes from '../actionTypes';

// export const signupAC = (obj) => {
//   return {
//     type: actionTypes.SIGNUP_AUTH,
//     payload: obj,
//   };
// };
export const signupSagaAC = (obj) => {
  return {
    type: actionTypes.SIGNUP_SAGA,
    payload: { obj: obj },
  };
};

export const loginSagaAC = (obj) => {
  return {
    type: actionTypes.LOGIN_SAGA,
    payload: obj,
  };
};
export const loginAC = (obj, token) => {
  return {
    type: actionTypes.LOGIN_AUTH,
    payload: { ...obj, token: token.token },
  };
};
export const logoutAC = () => {
  return {
    type: actionTypes.LOGOUT_AUTH,
  };
};
