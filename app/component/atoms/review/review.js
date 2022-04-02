/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import imageStyle from '../../../styles/image/image';
import labelStyle from '../../../styles/label/label';
import color from '../../../themes/color/color';

function Review(props) {
  const {reviewAvarage, fontWeight} = props;
  return (
    <View style={style.view}>
      <Image
        style={imageStyle.starImage}
        source={require('../../../assets/images/star.png')}
      />
      <Text
        style={[
          labelStyle.smallestText,
          style.text,

          {fontWeight: fontWeight ? fontWeight : '400'},
        ]}>
        {reviewAvarage}
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
    marginLeft: 5,
    color: color.primaryBlack,
    marginBottom: 0,
  },
});

export default Review;
