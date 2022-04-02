/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const metrics = {
  ScreenWidth: width > height ? height : width,
  ScreenHidth: width < height ? height : width,
};

export const dimension = {
  backButtonHeight: 30,
  backButtonWidth: 30,
  bannerHeight: 180,
  categoryButtonHeight: 50,
  categoryButtonWidth: 50,
  categoryIconWidth: 25,
  productImageWidth: metrics.ScreenWidth / 2,
  productImageHeight: 150,
  iconImageHeight: 15,
  iconImageWidth: 15,
  iconSize: 20,
  profileImage: 45,
};

export default metrics;
