/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';
import viewsStyle from '../styles/view/view';

function HomeComponentContainer({children}) {
  return <View style={viewsStyle.homeComponentContainer}>{children}</View>;
}

export default HomeComponentContainer;
