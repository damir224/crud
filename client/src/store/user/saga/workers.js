import { put, call } from 'redux-saga/effects';
import { loginAC } from '../actions.js';
import uniFetch from '../../helper';

export function* signupWorker({ payload }) {
  const url = 'http://rest-api.noveogroup.com/api/v1/register';
  const urlAuth = 'http://rest-api.noveogroup.com/api/v1/user';
  try {
    const response = yield call(uniFetch, null, url, 'POST', payload.obj);
    // const response = yield call(signupFetch, payload);
    if (response.success) {
      const { data, success } = yield call(
        uniFetch,
        payload.data.token,
        urlAuth,
        'GET'
      );
      // const { data, success } = yield call(userInfoFetch, response);
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* loginWorker({ payload }) {
  const url = 'http://rest-api.noveogroup.com/api/v1/login';
  const urlAuth = 'http://rest-api.noveogroup.com/api/v1/user';
  try {
    const response = yield call(uniFetch, null, url, 'POST', payload);
    // const response = yield call(loginFetch, payload);
    if (response.success) {
      const { data, success } = yield call(
        uniFetch,
        response.data.token,
        urlAuth,
        'GET'
      );
      // const { data, success } = yield call(userInfoFetch, response);
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
    // if (error === 'authenticate.credentials_invalid') yield put(authErrAC())
  }
}
