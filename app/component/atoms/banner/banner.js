/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import backgroundStyle from '../../../styles/backgroundImage/backgroundImage';
import labelStyle from '../../../styles/label/label';

function Banner(props) {
  const {image, heading, subheading} = props.item;
  const images = {uri: image};
  return (
    <ImageBackground
      source={images}
      style={backgroundStyle.banner}
      resizeMode="cover"
      imageStyle={backgroundStyle.banner}>
      <Text style={[labelStyle.heading, labelStyle.BannerHeading]}>
        {heading}
      </Text>
      <Text style={[labelStyle.smallText, labelStyle.BannerHeading]}>
        {subheading}
      </Text>
    </ImageBackground>
  );
}

export default Banner;
