import {EPlayer, EPosition, EWinner} from './tictactoe.enums';
import {TBoard} from './tictactoe.types';
import {winnerPositions} from './tictactoe.data';

export const isCellEmpty = (
  board: TBoard,
  row: number,
  col: number,
): boolean => {
  return board[row][col] === EPosition.None;
};

export const isGameFinished = (board: TBoard): EWinner => {
  for (const winnerPosition of winnerPositions) {
    const [row1, col1] = winnerPosition[0];
    const [row2, col2] = winnerPosition[1];
    const [row3, col3] = winnerPosition[2];
    if (
      board[row1][col1] !== EPosition.None &&
      board[row1][col1] === board[row2][col2] &&
      board[row1][col1] === board[row3][col3]
    ) {
      if (board[row1][col1] === EPosition.X) {
        return EWinner.X;
      } else {
        return EWinner.O;
      }
    }
  }
  if (board.some(row => row.some(cell => cell === EPosition.None))) {
    return EWinner.None;
  }
  return EWinner.Draw;
};

export const makeMove = (
  board: TBoard,
  row: number,
  col: number,
  currentPlayer: EPlayer,
): boolean => {
  if (isCellEmpty(board, row, col)) {
    board[row][col] = currentPlayer === EPlayer.X ? EPosition.X : EPosition.O;
    return true;
  }
  return false;
};

export const resetGame = (board: TBoard): void => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = EPosition.None;
    }
  }
};

export const newGame = (): TBoard => {
  return [
    [EPosition.None, EPosition.None, EPosition.None],
    [EPosition.None, EPosition.None, EPosition.None],
    [EPosition.None, EPosition.None, EPosition.None],
  ];
};

export const nextPlayer = (currentPlayer: EPlayer): EPlayer => {
  return currentPlayer === EPlayer.X ? EPlayer.O : EPlayer.X;
};
