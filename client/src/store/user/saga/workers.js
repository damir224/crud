import { put, call } from 'redux-saga/effects';
import { loginAC } from '../actions.js';
import { signupFetch, loginFetch, userInfoFetch } from './asyncFunc';

export function* signupWorker({ payload }) {
  try {
    const response = yield call(signupFetch, payload);
    if (response.success) {
      const { data, success } = yield call(userInfoFetch, response);
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* loginWorker({ payload }) {
  try {
    const response = yield call(loginFetch, payload);
    if (response.success) {
      const { data, success } = yield call(userInfoFetch, response);
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
    // if (error === 'authenticate.credentials_invalid') yield put(authErrAC())
  }
}
