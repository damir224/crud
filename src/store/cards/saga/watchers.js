import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../actionTypes';
import {
  getCardsWorker,
  addCardWorker,
  updateCardWorker,
  delCardWorker,
  likeCardWorker
} from './workers';

export function* getCardsWatcher() {
  yield takeEvery(actionTypes.GET_CARDS_SAGA, getCardsWorker);
}
export function* addCardWatcher() {
  yield takeEvery(actionTypes.ADD_CARD_SAGA, addCardWorker);
}
export function* updateCardWatcher() {
  yield takeEvery(actionTypes.UPDATE_CARD_SAGA, updateCardWorker);
}
export function* delCardWatcher() {
  yield takeEvery(actionTypes.DEL_CARD_SAGA, delCardWorker);
}
export function* likeCardWatcher() {
  yield takeEvery(actionTypes.LIKE_CARD_SAGA, likeCardWorker);
}
