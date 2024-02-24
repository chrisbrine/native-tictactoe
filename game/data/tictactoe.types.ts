import {EPlayer, EPosition} from './tictactoe.enums';

type TBoardRow = [EPosition, EPosition, EPosition];

export type TBoard = [TBoardRow, TBoardRow, TBoardRow];
export const firstPlayer = EPlayer.X;
