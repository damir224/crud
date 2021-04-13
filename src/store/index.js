import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from 'redux-saga/effects';
import userReducers from './user/reducers';
import cardsReducers from './cards/reducers';
import {
  getCardsWatcher,
  addCardWatcher,
  updateCardWatcher,
  delCardWatcher,
  likeCardWatcher
} from './cards/saga/watchers';
import { signupWatcher, loginWatcher } from './user/saga/watchers';

const sagaMiddleware = saga();

const reducers = combineReducers({
  userReducers,
  cardsReducers
});

const composeEnhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

export default createStore(reducers, composeEnhancer);

sagaMiddleware.run(function* () {
  yield all([
    getCardsWatcher(),
    addCardWatcher(),
    updateCardWatcher(),
    delCardWatcher(),
    likeCardWatcher(),
    signupWatcher(),
    loginWatcher()
  ]);
});
