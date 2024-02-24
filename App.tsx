/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {EWinner} from './game/data/tictactoe.enums';
import Game from './game';
import {dataStyles as styles, Data} from './game/ShowData';
import Stats from './game/Stats';

function App(): React.JSX.Element {
  const [playing, setPlaying] = React.useState(true);
  const [currentWinner, setWinner] = React.useState(EWinner.None);
  const [stats, setStats] = React.useState<[number, number, number]>([0, 0, 0]); // [X, O, draws
  function endGame({winner}: {winner: EWinner}): void {
    setPlaying(false);
    setWinner(winner);
    if (winner !== EWinner.Draw) {
      const pos = winner === EWinner.X ? 0 : 1;
      setStats(prev => {
        const newStats: [number, number, number] = [...prev];
        newStats[pos] += 1;
        return newStats;
      });
    } else {
      setStats(prev => {
        const newStats: [number, number, number] = [...prev];
        newStats[2] += 1;
        return newStats;
      });
    }
  }
  function startGame(): void {
    setPlaying(true);
    setWinner(EWinner.None);
  }
  return playing ? (
    <Game endGame={endGame} />
  ) : (
    <View style={styles.container}>
      <Data
        label="Winner"
        text={currentWinner}
        show={currentWinner !== EWinner.None && currentWinner !== EWinner.Draw}
      />
      {currentWinner === EWinner.Draw && <Text style={styles.draw}>Draw</Text>}
      <Stats stats={stats} />
      <Button title="Play Again" onPress={startGame} />
    </View>
  );
}

export default App;
