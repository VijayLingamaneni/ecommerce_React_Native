/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlexBoxTowContainer from '../../../../containers/flexboxwithGap';
import labelStyle from '../../../../styles/label/label';
import margin from '../../../../themes/commonStyle';
import ProfileImage from '../../../atoms/profileImage/profileImage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {dimension} from '../../../../themes/metric/metrics';
import color from '../../../../themes/color/color';

function ProfileOfficialStore(props) {
  const {image, name} = props;

  return (
    <View style={style.view}>
      <FlexBoxTowContainer
        leftItem={
          <View style={style.innerView}>
            <View>
              <ProfileImage image={image} />
            </View>
            <View style={style.fontView}>
              <Text style={labelStyle.profileHead}>{name}</Text>
              <Text style={labelStyle.smallestText}>Official store</Text>
            </View>
          </View>
        }
        rightItem={
          <MaterialIcons
            name="keyboard-arrow-right"
            color={color.secondaryDarkGray}
            size={dimension.iconSize}
          />
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
  },
  fontView: {
    marginLeft: margin.headingMargin,
  },
});

export default ProfileOfficialStore;
