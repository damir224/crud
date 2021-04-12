import actionTypes from '../actionTypes';
const prelodableState = {
  user: {
    birthdate: '',
    email: '',
    id: '',
    last_name: '',
    name: '',
    role: '',
    token: '',
    isAuth: false,
  },
};
const userReducers = (state = prelodableState, action) => {
  console.log(`action`, action);
  switch (action.type) {
    case actionTypes.LOGIN_AUTH:
      return {
        ...state,
        user: {
          isAuth: true,
          ...action.payload,
        },
      };
    case actionTypes.LOGOUT_AUTH:
      return {
        ...state,
        user: {
          ...prelodableState.user,
        },
      };
    default:
      return state;
  }
};

export default userReducers;
