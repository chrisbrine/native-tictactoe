const borderWidth = 2;

const BB = {borderBottomWidth: borderWidth};
const BR = {borderRightWidth: borderWidth};
const BL = {borderLeftWidth: borderWidth};
const BT = {borderTopWidth: borderWidth};
const BA = {borderWidth: borderWidth};
const BY = {...BB, ...BT};
const BX = {...BR, ...BL};

const borders = [
  [
    {...BR, ...BB},
    {...BX, ...BB},
    {...BL, ...BB},
  ],
  [{...BR, ...BY}, {...BA}, {...BL, ...BY}],
  [
    {...BR, ...BT},
    {...BX, ...BT},
    {...BL, ...BT},
  ],
];

export const getBorder = (row: number, col: number) => borders[row][col];
