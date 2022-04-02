/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import labelStyle from '../../styles/label/label';
import color from '../../themes/color/color';
import Review from '../atoms/review/review';

function ReviewUi(props) {
  const {reviews} = props;
  return (
    <View style={style.view}>
      <Review {...props} />
      <Text style={[labelStyle.smallestText, style.text]}>
        {reviews} Reviews
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: color.primaryBlack,
    marginBottom: 0,
  },
});

export default ReviewUi;
