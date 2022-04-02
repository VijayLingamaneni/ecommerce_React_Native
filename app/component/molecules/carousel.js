/* eslint-disable prettier/prettier */

import React from 'react';
import Carousel from 'react-native-snap-carousel';

function Crousels(props) {
  const {data, itemWidth, crouselWidth, renderItem} = props;
  const carouselRef = React.useRef(null);
  return (
    <Carousel
      ref={carouselRef}
      data={data}
      renderItem={renderItem}
      sliderWidth={crouselWidth}
      itemWidth={itemWidth}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      activeSlideAlignment='start'
      slideStyle={{marginRight:(crouselWidth*5/itemWidth)}}
    />
  );
}

export default Crousels;
