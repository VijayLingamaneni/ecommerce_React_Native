/* eslint-disable prettier/prettier */

import React from "react";
import { Text } from "react-native-paper";
import labelStyle from "../../../styles/label/label";

function PriceText(props) {
  const { original, isDetailPage } = props;
  return (
    <Text
      style={[
        isDetailPage ? labelStyle.priceDetailText : labelStyle.priceText,
        { textDecorationLine: "line-through" },
      ]}
    >
      ${original}
    </Text>
  );
}

export default PriceText;
