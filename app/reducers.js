import {
  RECEIVE_BINGO_BOARD
} from "./constants";

const initialState = {
  loading: false,
  bingoBoard: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_BINGO_BOARD:
      return {
        ...state,
        bingoBoard: action.payload.board
      };

    default:
      return state;
  }
}
