/* eslint-disable prettier/prettier */

import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
function ImageSlider(props) {
  const {images} = props;
  return (
    <SliderBox
      images={images}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
    />
  );
}

export default ImageSlider;
