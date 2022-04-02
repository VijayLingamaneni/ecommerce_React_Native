/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import inputStyle from "../../../styles/input/input";
import color from "../../../themes/color/color";

function Input(props) {
  const [text, setText] = useState("");
  const { placeholder, icon, callBack } = props;
  return (
    <TextInput
      style={[inputStyle.input]}
      value={text}
      outlineColor={color.secondaryOffGray}
      activeOutlineColor={color.labelBlue}
      mode="outlined"
      placeholderTextColor={color.secondaryHalfGray}
      onChangeText={(text) => {
        setText(text);
        callBack(text);
      }}
      placeholder={placeholder}
      right={icon}
    />
  );
}

export default Input;
