import actionTypes from '../actionTypes';

export const getCardsSagaAC = (token) => ({
  type: actionTypes.GET_CARDS_SAGA,
  payload: token
});
export const getCardsAC = (cardArr) => ({
  type: actionTypes.GET_CARDS,
  payload: cardArr.posts
});
export const getCardInfoAC = (cardArr) => ({
  type: actionTypes.GET_CARD_INFO,
  payload: cardArr.posts
});
export const addCardSagaAC = (newCard) => ({
  type: actionTypes.ADD_CARD_SAGA,
  payload: newCard
});
export const addCardAC = (newCard) => ({
  type: actionTypes.ADD_CARD,
  payload: newCard
});
export const updateCardSagaAC = (updatedCard) => ({
  type: actionTypes.UPDATE_CARD_SAGA,
  payload: updatedCard
});
export const updateCardAC = (updatedCard) => ({
  type: actionTypes.UPDATE_CARD,
  payload: updatedCard
});
export const delCardSagaAC = (obj) => ({
  type: actionTypes.DEL_CARD_SAGA,
  payload: obj
});
export const delCardAC = (id) => ({
  type: actionTypes.DEL_CARD,
  payload: { id }
});
export const likeCardSagaAC = (obj) => ({
  type: actionTypes.LIKE_CARD_SAGA,
  payload: obj
});
export const likeCardAC = ({ post }) => ({
  type: actionTypes.LIKE_CARD,
  payload: post
});
