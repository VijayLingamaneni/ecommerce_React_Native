/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import imageStyle from '../../../styles/image/image';

function ProfileImage(props) {
  const {image} = props;
  return (
    <Image
      style={imageStyle.profileImage}
      source={{
        uri: image,
      }}
    />
  );
}

export default ProfileImage;
