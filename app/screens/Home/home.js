/* eslint-disable prettier/prettier */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "../../component/atoms/inputs/input";
import ProductCard from "../../component/organisms/productCard/productCard";

import HomeComponentContainer from "../../containers/homeComponentContainer";
import ScreenContainer from "../../containers/screenContainer";

function Home({ navigation }) {
  axios.defaults.withCredentials = true;

  const [product, setproduct] = useState([]);
  const [filteredProduct, setfilterproduct] = useState([]);
  const [search,setSearch]=useState("");
console.log(search);
  useEffect(() => {
    axios
      .get("https://ecommerce87.herokuapp.com/api/v1/getproduct")
      .then((res) => {
        
        setproduct(res.data.x);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   useEffect(() => {
    setfilterproduct(
      product.filter((item) =>
        item?.product_Name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search,product]);

  return (
    <ScrollView>
      <ScreenContainer>
        <HomeComponentContainer>
          <Input
            placeholder={"Search Product Name"}
            icon={<MaterialCommunityIcons name="search" />}
            callBack={setSearch}
          />
        </HomeComponentContainer>
        {filteredProduct.map((item, index) => {
          const pic = item.Product_Image.split(",");
          return (
            <HomeComponentContainer key={index}>
              <ProductCard
                item={{
                  id: item.product_ID,
                  image: pic[0],
                  heading: item.product_Name,
                  price: parseInt(
                    parseInt(item.original_price) -
                      (parseInt(item.original_price) * parseInt(item.offer)) /
                        100
                  ),
                  off: item.offer,
                  original: item.original_price,
                }}
              />
            </HomeComponentContainer>
          );
        })}
      </ScreenContainer>
    </ScrollView>
  );
}

export default Home;
