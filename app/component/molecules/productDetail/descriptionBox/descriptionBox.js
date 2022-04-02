/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import labelStyle from '../../../../styles/label/label';

function DescriptionBox(props) {
  const {details}=props;
  return (
    <View>
      <Text style={labelStyle.crouselHeading}>Description Product</Text>
      <Text>
        Brand Name: {details.brand}
       </Text>
        <Text>
        Seller: {details.seller}
        </Text>
        <Text>
        Made of: {details.fabric_Used}
        </Text>
        <Text>
        Color: {details?.color}

      </Text>
    </View>
  );
}


export default DescriptionBox;
