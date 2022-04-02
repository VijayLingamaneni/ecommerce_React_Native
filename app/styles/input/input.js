/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../themes/color/color';
import { border } from '../../themes/commonStyle';

const inputStyle = StyleSheet.create({
  input: {
    borderRadius: border.borderRadius,
    backgroundColor: color.secondaryOffGray,
  },
});

export default inputStyle;