import React from 'react';
import {Text, View} from 'react-native';
import {EPlayer, EWinner} from './data/tictactoe.enums';
import {dataStyles as styles, Data} from './ShowData';

export default function Info({
  winner,
  currentPlayer,
}: {
  winner: EWinner;
  currentPlayer: EPlayer;
}) {
  const hasWinner = winner !== EWinner.None;
  const showWinner = hasWinner && winner !== EWinner.Draw;
  return (
    <View style={styles.container}>
      <Data label="Current Player:" text={currentPlayer} show={!hasWinner} />
      <Data label="Winner:" text={winner} show={showWinner} />
      {hasWinner && winner === EWinner.Draw && (
        <Text style={styles.draw}>Draw</Text>
      )}
    </View>
  );
}
