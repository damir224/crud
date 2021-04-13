import actionTypes from '../actionTypes';

const preloadableState = {
  user: {
    birthdate: '',
    email: '',
    id: '',
    last_name: '',
    name: '',
    role: '',
    token: '',
    isAuth: false
  }
};
const userReducers = (state = preloadableState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTH:
      return {
        ...state,
        user: {
          isAuth: true,
          ...action.payload
        }
      };
    case actionTypes.LOGOUT_AUTH:
      return {
        ...state,
        user: {
          ...preloadableState.user
        }
      };
    default:
      return state;
  }
};

export default userReducers;
