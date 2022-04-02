/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/metric/metrics';

const imageStyle = StyleSheet.create({
  categoryIcon: {
    height: dimension.categoryIconWidth,
    width: dimension.categoryIconWidth,
  },
  productImage: {
    height: dimension.productImageHeight,
    width: dimension.productImageWidth,
    resizeMode: 'stretch',
  },
  starImage: {
    height: dimension.iconImageHeight,
    width: dimension.iconImageWidth,
  },
  profileImage: {
    height: dimension.profileImage,
    width: dimension.profileImage,
    borderRadius: 50,
  },
});

export default imageStyle;
