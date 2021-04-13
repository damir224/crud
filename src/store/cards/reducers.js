import actionTypes from '../actionTypes';

const preloadableState = {
  cards: []
};
const cardsReducers = (state = preloadableState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARDS:
      return { ...state, cards: [...action.payload] };
    case actionTypes.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload.post] };
    case actionTypes.UPDATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.map((e) => (e.id === action.payload.post.id ? action.payload.post : e))
        ]
      };
    case actionTypes.LIKE_CARD:
      return {
        ...state,
        cards: [...state.cards].map((e) => {
          if (e.id === action.payload.id) {
            return action.payload;
          }
          return e;
        })
      };
    case actionTypes.DEL_CARD:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default cardsReducers;
