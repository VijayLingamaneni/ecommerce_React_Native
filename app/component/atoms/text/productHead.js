/* eslint-disable prettier/prettier */

import React from 'react';
import {Text} from 'react-native-paper';
import labelStyle from '../../../styles/label/label';

function ProductHead(props) {
  const {heading, isDetailPage} = props;
  return (
    <Text
      style={
        isDetailPage ? labelStyle.productDetailHead : labelStyle.productHead
      }>
      {heading}
    </Text>
  );
}

export default ProductHead;
