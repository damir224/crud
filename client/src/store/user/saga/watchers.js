import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../actionTypes';
import { signupWorker, loginWorker } from './workers';

export function* signupWatcher() {
  yield takeEvery(actionTypes.SIGNUP_SAGA, signupWorker);
}

export function* loginWatcher() {
  yield takeEvery(actionTypes.LOGIN_SAGA, loginWorker);
}
