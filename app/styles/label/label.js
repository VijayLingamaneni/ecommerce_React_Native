/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../themes/color/color';
import margin from '../../themes/commonStyle';
import fontSize, {fontStyle, fontWeight} from '../../themes/font/font';
import metrics from '../../themes/metric/metrics';

const labelStyle = StyleSheet.create({
  label: {
    color: color.primaryBlack,
    marginBottom: margin.labelMargin,
    fontSize: fontSize.label,
    fontWeight: fontWeight.bold,
  },
  heading: {
    color: color.primaryBlack,
    marginBottom: margin.headingMargin,
    fontSize: fontSize.heading,
    fontWeight: fontWeight.bold,
    fontFamily: fontStyle.heading,
  },
  smallText: {
    color: color.secondaryDarkGray,
    marginBottom: margin.headingMargin,
    fontSize: fontSize.smallText,
  },
  normalText: {
    color: color.primaryBlack,
    marginBottom: margin.labelMargin,
    fontSize: fontSize.label,
  },
  smallestText: {
    color: color.secondaryDarkGray,
    marginBottom: margin.headingMargin,
    fontSize: fontSize.smallestTest,
  },
  priceText: {
    color: color.secondaryRed,
    marginBottom: margin.headingMargin,
    fontSize: fontSize.smallText,
  },
  priceDetailText: {
    color: color.secondaryRed,
    marginBottom: margin.headingMargin,
    fontSize: fontSize.label,
  },
  productHead: {
    color: color.primaryBlack,
    marginBottom: margin.labelMargin,
    marginTop: margin.labelMargin,
    fontSize: fontSize.smallText,
    fontWeight: fontWeight.bold,
  },
  productDetailHead: {
    color: color.primaryBlack,
    marginBottom: margin.labelMargin,
    fontSize: fontSize.heading,
    fontWeight: fontWeight.bold,
  },
  crouselHeading: {
    color: color.primaryBlack,
    fontSize: fontSize.mediumText,
    fontWeight: fontWeight.bold,
  },
  BannerHeading: {
    color: color.primaryWhite,
    width: (metrics.ScreenWidth * 2) / 3,
    marginLeft: margin.screensMargin,
  },
  profileHead: {
    color: color.primaryBlack,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.mediumText,
    marginBottom: margin.labelMargin,
  },
});

export default labelStyle;
