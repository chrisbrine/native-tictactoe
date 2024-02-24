export enum EPlayer {
  X = 'X',
  O = 'O',
}

export enum EPosition {
  X = EPlayer.X,
  O = EPlayer.O,
  None = '',
}

export enum EWinner {
  X = EPlayer.X,
  O = EPlayer.O,
  Draw = 'Draw',
  None = 'None',
}
