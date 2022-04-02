/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View} from 'react-native';
import imageStyle from '../../../styles/image/image';
import viewsStyle from '../../../styles/view/view';

function CategoryBox(props) {
  const {icon, backgroundColor} = props.item;
  const images = {
    uri: icon,
  };

  return (
    <View
      style={[viewsStyle.categoryButton, {backgroundColor: backgroundColor}]}>
      <Image style={[imageStyle.categoryIcon]} source={images} />
    </View>
  );
}

export default CategoryBox;
