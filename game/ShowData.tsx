import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import {EPlayer, EWinner} from './data/tictactoe.enums';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const textSize = 25;
const paddingSize = 10;

export const dataStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontSize: textSize,
    padding: paddingSize,
    fontWeight: 'bold',
  },
  draw: {
    fontSize: textSize,
    padding: paddingSize,
    fontWeight: 'bold',
    color: Colors.green,
  },
});

export const getTextStyle = (player: EPlayer | EWinner) => {
  const color =
    player === EPlayer.X || player === EWinner.X ? Colors.red : Colors.blue;
  return StyleSheet.create({
    text: {
      fontSize: textSize,
      padding: paddingSize,
      fontWeight: 'bold',
      color,
    },
  });
};

export default function ShowData({
  containerStyle,
  label,
  labelStyle,
  text,
  textStyle,
  show,
}: {
  containerStyle?: StyleProp<TextStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  show: boolean;
}): JSX.Element {
  return show ? (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={textStyle}>{text}</Text>
    </View>
  ) : (
    <></>
  );
}

export const Data = ({
  label,
  text,
  show,
}: {
  label: string;
  text: EPlayer | EWinner;
  show: boolean;
}) => {
  return (
    <ShowData
      containerStyle={dataStyles.dataContainer}
      label={label}
      labelStyle={dataStyles.label}
      text={text}
      textStyle={getTextStyle(text).text}
      show={show}
    />
  );
};
