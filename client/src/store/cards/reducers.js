import actionTypes from '../actionTypes.js';
const prelodableState = {
  cards: [],
  // cardInfo: {},
};
const cardsReducers = (state = prelodableState, action) => {
  console.log(`action.payload`, action.payload);
  switch (action.type) {
    case actionTypes.GET_CARDS:
      console.log(`action.payload`, action.payload);
      return { ...state, cards: [...action.payload] };
    // return { ...state, cards: [...action.payload] };
    // case actionTypes.GET_CARD_INFO:
    //   return { ...state, cardInfo: [...action.payload] };
    case actionTypes.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload.post] };
    case actionTypes.LIKE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.map((e) =>
            e === action.payload.id ? (e.like = !e.like) : e.like
          ),
        ],
      };
    case actionTypes.DEL_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((e) => e !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default cardsReducers;
