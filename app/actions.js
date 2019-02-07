import { spyro2BingoList } from './bingo/spyro_4.1.js';
import { bingoGenerator } from './bingo/generator.js';
import {
  RECEIVE_BINGO_BOARD
} from './constants';

export function generateBingoBoard() {
  return {
    type: RECEIVE_BINGO_BOARD,
    payload: {
      board: bingoGenerator(spyro2BingoList, {})
    }
  }
}
