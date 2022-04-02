/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import labelStyle from '../../../styles/label/label';

function Heading(props) {
  const {heading} = props;
  return (
    <View>
      <Text style={labelStyle.heading}>{heading}</Text>
    </View>
  );
}

export default Heading;
