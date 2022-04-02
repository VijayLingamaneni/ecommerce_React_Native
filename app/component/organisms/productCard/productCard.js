/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import FlexBoxTowContainer from "../../../containers/flexboxwithGap";
import viewsStyle from "../../../styles/view/view";
import color from "../../../themes/color/color";
import ProductImage from "../../atoms/productImage/productImage";
import PriceText from "../../atoms/text/priceText";
import ProductHead from "../../atoms/text/productHead";
import ReviewUi from "../../molecules/review";
import { useNavigation } from "@react-navigation/native";

//image,heading,price,reviews,reviewAvarage -------------------------------------- props pass
function ProductCard(props) {
  console.log("--------", props.item.id);
    const navigations = useNavigation();
  return (
    <View
      style={viewsStyle.productCard}
      onStartShouldSetResponder={() =>
        navigations.navigate("ProductDetail", {
          item: props?.item?.id,
        })
      }
    >
      <View style={style.imageView}>
        <ProductImage {...props.item} />
      </View>
      <ProductHead {...props.item} />
      <View style={style.view}>
        <Text
          style={{
            color: "black",
            marginRight: 10,
          }}
        >
          ${props?.item?.price}
        </Text>
        <PriceText {...props.item} />
        <Text
          style={{
            color: "black",
            marginLeft: 10,
          }}
        >
          {props?.item?.off}%
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  imageView: {
    alignItems: "center",
  },
  view: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ProductCard;
