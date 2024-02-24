import {
  isGameFinished,
  makeMove,
  newGame,
  nextPlayer,
  resetGame,
} from './tictactoe.functions';
import {EPlayer, EPosition, EWinner} from './tictactoe.enums';
import {TBoard, firstPlayer} from './tictactoe.types';

interface ITicTacToe {
  board(): TBoard;
  currentPlayer(): EPlayer;
  winner(): EWinner;
  makeMove(row: number, col: number): EPlayer | boolean;
  resetGame(): void;
}

const TicTacToe = (): ITicTacToe => {
  const board: TBoard = newGame();
  let currentPlayer: EPlayer = firstPlayer;
  let winner: EWinner = EWinner.None;
  return {
    board: () => board,
    currentPlayer: () => currentPlayer,
    makeMove: (row: number, col: number): EPlayer | boolean => {
      const newPlayer = makeMove(board, row, col, currentPlayer);
      if (newPlayer) {
        currentPlayer = nextPlayer(currentPlayer);
        winner = isGameFinished(board);
        return currentPlayer;
      }
      return false;
    },
    winner: () => winner,
    resetGame: () => {
      resetGame(board);
      currentPlayer = firstPlayer;
    },
  };
};

export {TicTacToe, EPosition, EWinner, EPlayer};
export type {TBoard, ITicTacToe};
