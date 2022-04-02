/* eslint-disable prettier/prettier */

import React from 'react';
import Carousel from 'react-native-snap-carousel';
import metrics from '../../../themes/metric/metrics';
import ProductCard from '../../../component/organisms/productCard/productCard';
import {View} from 'react-native';
import FlexBoxTowContainer from '../../../containers/flexboxwithGap';
import {Text} from 'react-native-paper';
import labelStyle from '../../../styles/label/label';
import color from '../../../themes/color/color';
import viewsStyle from '../../../styles/view/view';
import Crousels from '../../molecules/carousel';

//heading,data, itemWidth, crouselWidth, renderItem --------------------------props
function CrouselWithHead(props) {
  const {heading} = props;

  return (
    <View>
      <View style={viewsStyle.carouselView}>
        <FlexBoxTowContainer
          leftItem={<Text style={labelStyle.crouselHeading}>{heading}</Text>}
          rightItem={<Text style={{color: color.primaryBlue}}>See All</Text>}
        />
      </View>
      <Crousels {...props} />
    </View>
  );
}

export default CrouselWithHead;
