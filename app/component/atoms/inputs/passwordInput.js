/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import inputStyle from "../../../styles/input/input";
import color from "../../../themes/color/color";

function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const { placeholder, callBack } = props;

  return (
    <TextInput
      style={[inputStyle.input]}
      value={password}
      outlineColor={color.secondaryOffGray}
      activeOutlineColor={color.labelBlue}
      mode="outlined"
      placeholderTextColor={color.secondaryHalfGray}
      onChangeText={(text) => {
        setPassword(text);
        callBack(text);
      }}
      placeholder={placeholder}
      secureTextEntry={!showPassword}
      right={
        <TextInput.Icon
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          color={color.secondaryDarkGray}
          onPress={() => {
            setshowPassword(!showPassword);
          }}
        />
      }
    />
  );
}

export default PasswordInput;
