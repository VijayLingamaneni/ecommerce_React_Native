/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../themes/color/color';
import { border } from '../../themes/commonStyle';
import { dimension } from '../../themes/metric/metrics';

const buttonStyle = StyleSheet.create({
  button: {
    borderRadius: border.borderRadius,
    backgroundColor: color.primaryBlue,
    padding:10
  },
  outlineButton:{
    borderRadius: border.borderRadius,
    padding:10
  },
  backButton:{
    height:dimension.backButtonHeight,
    width:dimension.backButtonWidth
  }
});

export default buttonStyle;