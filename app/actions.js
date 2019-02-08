import { spyro2BingoList } from './bingo/spyro_4.1.js';
import { bingoGenerator } from './bingo/generator.js';
import {
  RECEIVE_BINGO_BOARD
} from './constants';


const defaultHeaders = {
  'Accept': 'application/json',
  // 'Content-Type': 'application/json'
};


// //
// Action creators
// //

export function requestBingoBoard() {
  return dispatch => {
    fetch("http://localhost:3000/api/rooms/create", {
      headers: defaultHeaders,
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((response) => {
      console.log(response.data.room.board.cells)
      return dispatch(receiveBingoBoard(response.data.room.board.cells));
    });
  }
}



// //
// Actions
// //

export function receiveBingoBoard(board) {
  return {
    type: RECEIVE_BINGO_BOARD,
    payload: {
      board: board
    }
  }
}

export function generateBingoBoard() {
  const board = bingoGenerator(spyro2BingoList, {});
  return {
    type: RECEIVE_BINGO_BOARD,
    payload: {
      board: board
    }
  }
}



// //
// Utilities
// //

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300 || response.status == 422) {
    return response;
  } else {
    throw response;
  }
};

function parseJSON(response) {
  return response.json();
};
