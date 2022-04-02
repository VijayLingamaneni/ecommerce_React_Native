/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function FlexBoxTowContainer(props) {

const {leftItem,rightItem}=props;

  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Text>{leftItem}</Text>
      </View>
      <View style={style.rightContainer}>
        <Text>{rightItem}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center'
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default FlexBoxTowContainer;
