/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';
import viewsStyle from '../styles/view/view';

function BorderContainer({children}) {
  return <View style={viewsStyle.borderContainer}>{children}</View>;
}

export default BorderContainer;
