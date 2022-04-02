/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import margin, {border} from '../../themes/commonStyle';
import metrics, {dimension} from '../../themes/metric/metrics';

const backgroundStyle = StyleSheet.create({
  banner: {
    borderRadius: border.borderRadius,
    height: dimension.bannerHeight,
    width: metrics.ScreenWidth-(2*margin.screensMargin),
    overflow: 'hidden',
    justifyContent: 'center',
  },
});

export default backgroundStyle;
