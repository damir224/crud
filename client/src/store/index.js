import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from 'redux-saga/effects';

import userReducers from './user/reducers.js';
import cardsReducers from './cards/reducers.js';
import {
  getCardInfoWatcher,
  getCardsWatcher,
  addCardWatcher,
  updateCardWatcher,
  delCardWatcher,
  likeCardWatcher,
} from './cards/saga/watchers.js';
import { signupWatcher, loginWatcher } from './user/saga/watchers.js';

const sagaMiddleware = saga();

const reducers = combineReducers({
  userReducers,
  cardsReducers,
});

const composeEnhancer =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, composeEnhancer);
console.log('test redux/index.js');

sagaMiddleware.run(function* () {
  yield all([
    getCardsWatcher(),
    getCardInfoWatcher(),
    addCardWatcher(),
    updateCardWatcher(),
    delCardWatcher(),
    likeCardWatcher(),
    signupWatcher(),
    loginWatcher(),
  ]);
});
