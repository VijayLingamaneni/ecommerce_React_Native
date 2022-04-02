/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../themes/color/color';
import margin, {border, padding} from '../../themes/commonStyle';
import metrics, {dimension} from '../../themes/metric/metrics';

const viewsStyle = StyleSheet.create({
  views: {
    marginBottom: margin.commonMargin,
  },
  viewContainer: {
    padding: margin.screensMargin,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.primaryWhite,
  },
  headingAndInputView: {
    marginBottom: margin.commonMargin,
  },
  categoryButton: {
    height: dimension.categoryButtonHeight,
    width: dimension.categoryButtonWidth,
    borderRadius: border.categoryBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  productCard: {
    borderRadius: border.borderRadius,
    padding: padding.productCardPadding,
    backgroundColor:color.secondarySoftGray
  },
  carouselView: {
    marginBottom: margin.commonMargin,
  },
  homeComponentContainer: {
    marginTop: margin.screensMargin,
    marginBottom: margin.screensMargin
  },
  borderContainer: {
    borderTopColor: color.secondaryHalfGray,
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0,
  },
});

export default viewsStyle;
