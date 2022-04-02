/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import labelStyle from '../../styles/label/label';
import CategoryBox from '../atoms/categorybox/categoryBox';

function CategoryName(props) {
  const {name} = props.item;

  return (
    <View style={style.view}>
      <CategoryBox {...props} />
      <Text style={labelStyle.normalText}>{name}</Text>
    </View>
  );
}

const style=StyleSheet.create({
    view:{
        alignItems:'center'
    }
})

export default CategoryName;
