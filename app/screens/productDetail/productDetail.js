/* eslint-disable prettier/prettier */

import React,{useEffect,useState} from "react";
import { ScrollView } from "react-native-gesture-handler";

import PriceText from "../../component/atoms/text/priceText";
import ProductHead from "../../component/atoms/text/productHead";
import { View, StyleSheet,Text } from "react-native";
import ImageSlider from "../../component/molecules/imageSlider";
import DescriptionBox from "../../component/molecules/productDetail/descriptionBox/descriptionBox";

import BorderContainer from "../../containers/borderContainer";
import HomeComponentContainer from "../../containers/homeComponentContainer";
import ScreenContainer from "../../containers/screenContainer";
import axios from "axios";

function ProductDetail({ navigation,route }) {
  
  const [details, setdetails] = useState({});
  const [image, setimage] = useState(0);
  const {item}=route.params;
  console.log(item);

   useEffect(() => {
    axios
      .get(`https://ecommerce87.herokuapp.com/api/v1/getProductInfo/${item}`)
      .then((res) => {
        console.log(res);
        setdetails(res?.data?.x);
        setimage(res?.data?.x?.Product_Image?.split(",")[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  
  const pic = details?.Product_Image?.split(",");
console.log(pic);

  return (
    <ScrollView>
      {pic&&<ImageSlider
        images={pic}
      />}
      <ScreenContainer>
        <ProductHead isDetailPage={true} heading={details.product_Name} />
        <View style={style.view}>
        <Text
          style={{
            color: "black",
            marginRight: 10,
          }}
        >
          ${parseInt(details.original_price) -
                  (parseInt(details.original_price) * parseInt(details.offer)) /
                    100}
        </Text>
        <PriceText original={details.original_price} />
        <Text
          style={{
            color: "black",
            marginLeft: 10,
          }}
        >
          {details.offer}%
        </Text>
      </View>

        <HomeComponentContainer>
          <BorderContainer>
            <DescriptionBox details={details} />
          </BorderContainer>
        </HomeComponentContainer>
      </ScreenContainer>
    </ScrollView>
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

export default ProductDetail;
