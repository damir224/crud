/* eslint-disable consistent-return */
import { put, call } from 'redux-saga/effects';
// import dotenv from 'dotenv';
import uniFetch from '../../../helpers/helper';

import {
  getCardsAC,
  addCardAC,
  delCardAC,
  likeCardAC,
  updateCardAC
} from '../actions';

// dotenv.config();
export function* getCardsWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}posts?order_by=id`;
  try {
    const data = yield call(uniFetch, payload, url, 'GET');
    if (data.success) return yield put(getCardsAC(data.data));
    throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* addCardWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}posts`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'POST', {
      title: payload.title,
      content: payload.description
    });
    if (data.success) return yield put(addCardAC(data.data));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* updateCardWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}posts/${payload.id}`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'PUT', {
      title: payload.title,
      content: payload.description
    });
    if (data.success) return yield put(updateCardAC(data.data));
    throw data.errors;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* delCardWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}posts/${payload.id}`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'DELETE', {
      title: payload.title,
      content: payload.description
    });
    if (data.success) return yield put(delCardAC(payload.id));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* likeCardWorker({ payload }) {
  const url = `${process.env.REACT_APP_URL}posts/${payload.id}/like`;
  try {
    const data = yield call(uniFetch, payload.token, url, 'POST', payload);
    if (data.success) return yield put(likeCardAC(data.data));
    throw data.errors.content;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
