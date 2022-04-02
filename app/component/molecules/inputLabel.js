/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Text, View } from "react-native";
import labelStyle from "../../styles/label/label";
import viewsStyle from "../../styles/view/view";
import Input from "../atoms/inputs/input";
import PasswordInput from "../atoms/inputs/passwordInput";

function InputLable(props) {
  const { text, type, callBack } = props;

  return (
    <View style={viewsStyle.views}>
      <Text style={labelStyle.label}>{text}</Text>
      {type == "password" ? <PasswordInput {...props} /> : <Input {...props} />}
    </View>
  );
}

export default InputLable;
