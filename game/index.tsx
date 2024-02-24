import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TicTacToe, ITicTacToe, EWinner} from './data/tictactoe';
import Board from './Board';
import Info from './Info';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Game({
  endGame,
}: {
  endGame: ({winner}: {winner: EWinner}) => void;
}): JSX.Element {
  const [game, setGame] = React.useState<ITicTacToe>(TicTacToe());
  const [board, setBoard] = React.useState(game.board());
  const [currentPlayer, setCurrentPlayer] = React.useState(
    game.currentPlayer(),
  );
  const [winner, setWinner] = React.useState(game.winner());
  const isDarkMode = useColorScheme() === 'dark';

  const makeMove = (row: number, col: number): void => {
    const newPlayer = game.makeMove(row, col);
    if (newPlayer) {
      setGame(game);
      setBoard(game.board());
      setCurrentPlayer(game.currentPlayer());
      setWinner(game.winner());
    }
  };

  const resetGame = (): void => {
    const newGame = TicTacToe();
    setGame(newGame);
    setBoard(newGame.board());
    setCurrentPlayer(newGame.currentPlayer());
    setWinner(newGame.winner());
  };

  useEffect(() => {
    if (winner !== EWinner.None) {
      endGame({winner});
    }
  }, [endGame, winner]);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Board board={board} makeMove={makeMove} winner={winner} />
          <Info winner={winner} currentPlayer={currentPlayer} />
          <Button title="Reset" onPress={resetGame} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
