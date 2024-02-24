import React from 'react';
import {EPosition, EWinner, TBoard} from './data/tictactoe';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getBorder} from './data/borderWidths';

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderColor: 'black',
    borderStyle: 'solid',
    // borderWidth: 2,
    // borderBottomWidth: 2,
    // borderBottomColor: 'black',
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 75,
  },
  winner: {
    fontSize: 50,
    padding: 10,
  },
});

const border = (row: number, col: number) =>
  StyleSheet.create({
    cell: getBorder(row, col),
  });

const cellBorderStyle = (row: number, col: number) =>
  StyleSheet.create({
    cell: {
      ...styles.cell,
      ...border(row, col).cell,
    },
  });

const textValueStyle = (value: EPosition) =>
  StyleSheet.create({
    cellText: {
      ...styles.cellText,
      color: value === EPosition.X ? 'red' : 'blue',
    },
  });

function Cell({
  row,
  col,
  makeMove,
  value,
}: {
  row: number;
  col: number;
  makeMove: (row: number, col: number) => void;
  value: EPosition;
}): JSX.Element {
  return (
    <TouchableOpacity
      style={cellBorderStyle(row, col).cell}
      onPressIn={() => makeMove(row, col)}>
      <Text style={textValueStyle(value).cellText}>{value}</Text>
    </TouchableOpacity>
  );
}

export default function Board({
  board,
  makeMove,
  winner,
}: {
  board: TBoard;
  makeMove: (row: number, col: number) => void;
  winner: EWinner;
}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const doMakeMove = (row: number, col: number) => {
    if (winner === EWinner.None) {
      makeMove(row, col);
    }
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          {board.map((row, i) => (
            <View key={`row-${i}`} style={styles.row}>
              {row.map((cell, j) => (
                <Cell
                  key={`cell-${i}-${j}`}
                  row={i}
                  col={j}
                  makeMove={doMakeMove}
                  value={cell}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
