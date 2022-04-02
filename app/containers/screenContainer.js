/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';
import viewsStyle from '../styles/view/view';


function ScreenContainer({children}) {
  return (
    <View style={viewsStyle.viewContainer}>
      {children}
    </View>
  );
}

export default ScreenContainer;
