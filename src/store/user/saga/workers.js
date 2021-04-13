/* eslint-disable consistent-return */
import { put, call } from 'redux-saga/effects';
import { loginAC } from '../actions';
import uniFetch from '../../../helpers/helper';

export function* signupWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}/register`;
  const urlAuth = `${process.env.REACT_APP_URL}/user`;
  try {
    const response = yield call(uniFetch, null, url, 'POST', payload.obj);
    if (response.success) {
      const { data, success } = yield call(
        uniFetch,
        payload.data.token,
        urlAuth,
        'GET'
      );
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* loginWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}/login`;
  const urlAuth = `${process.env.REACT_APP_URL}/user`;
  try {
    const response = yield call(uniFetch, null, url, 'POST', payload);
    if (response.success) {
      const { data, success } = yield call(
        uniFetch,
        response.data.token,
        urlAuth,
        'GET'
      );
      if (success) return yield put(loginAC(data.user, response.data));
    }
    throw response.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
