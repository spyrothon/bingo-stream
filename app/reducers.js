import {
  RECEIVE_BINGO_BOARD,
  REQUEST_BINGO_BOARD
} from "./constants";

const initialState = {
  loading: false,
  bingoBoard: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REQUEST_BINGO_BOARD:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_BINGO_BOARD:
      return {
        ...state,
        loading: false,
        bingoBoard: action.payload.board
      };

    default:
      return state;
  }
}
