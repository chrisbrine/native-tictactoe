import React from 'react';
import {StyleSheet, View, Text, StyleProp, TextStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const fontSize = 25;
const paddingSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  statLabelX: {
    fontSize: fontSize,
    padding: paddingSize,
    fontWeight: 'bold',
    color: Colors.red,
  },
  statLabelO: {
    fontSize: fontSize,
    padding: paddingSize,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  statLabelDraw: {
    fontSize: fontSize,
    padding: paddingSize,
    fontWeight: 'bold',
    color: Colors.green,
  },
  statText: {
    fontSize: fontSize,
    padding: paddingSize,
  },
});

function ShowStats({
  label,
  labelStyle,
  textStyle,
  count,
  total,
}: {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  count: number;
  total: number;
}): JSX.Element {
  return (
    <View style={styles.statContainer}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={textStyle}>
        {count}/{total} ({((count / total) * 100).toFixed(0)}%)
      </Text>
    </View>
  );
}

export default function Stats({
  stats,
}: {
  stats: [number, number, number];
}): JSX.Element {
  const totalGames = stats.reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <ShowStats
        label="X Wins:"
        labelStyle={styles.statLabelX}
        textStyle={styles.statText}
        count={stats[0]}
        total={totalGames}
      />
      <ShowStats
        label="O Wins:"
        labelStyle={styles.statLabelO}
        textStyle={styles.statText}
        count={stats[1]}
        total={totalGames}
      />
      <ShowStats
        label="Draws:"
        labelStyle={styles.statLabelDraw}
        textStyle={styles.statText}
        count={stats[2]}
        total={totalGames}
      />
    </View>
  );
}
