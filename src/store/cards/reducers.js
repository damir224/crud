import actionTypes from '../actionTypes.js';
const prelodableState = {
  cards: [],
  // cardInfo: {},
};
const cardsReducers = (state = prelodableState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARDS:
      return { ...state, cards: [...action.payload] };
    case actionTypes.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload.post] };
    case actionTypes.UPDATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.map((e) =>
            e.id === action.payload.post.id ? action.payload.post : e
          ),
        ],
      };
    case actionTypes.LIKE_CARD:
      console.log(`state.cards`, state.cards);
      // console.log(
      //   `afetr`,
      [...state.cards].map((e) =>
        console.log(
          e.id,
          action.payload.post.id,
          e.id === action.payload.post.id
        )
      );
      // );
      return {
        ...state,
        cards: [...state.cards].map((e) =>
          e.id === action.payload.post.id ? { ...e, like: !e.like } : e
        ),
      };
    case actionTypes.DEL_CARD:
      return {
        ...state,
        // cards: [...state.cards].filter((e) => e !== +action.payload.id),
      };
    default:
      return state;
  }
};

export default cardsReducers;
