/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import imageStyle from '../../../styles/image/image';

function ProductImage(props) {
  const {image} = props;
  return (
    <Image
      style={imageStyle.productImage}
      source={{
        uri: image,
      }}
    />
  );
}

export default ProductImage;
