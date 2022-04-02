/* eslint-disable prettier/prettier */
import React from "react";
import { Button } from "react-native-paper";
import buttonStyle from "../../../styles/button/button";
import color from "../../../themes/color/color";

function Buttons(props) {
  const { outline, disable, text, callBack } = props;

  return (
    <Button
      style={
        outline || disable ? buttonStyle.outlineButton : buttonStyle.button
      }
      color={outline ? color.primaryBlack : "red"}
      disabled={disable}
      onPress={() => {
        callBack();
      }}
      mode={outline ? "outlined" : "contained"}
    >
      {text}
    </Button>
  );
}

export default Buttons;
