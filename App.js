import React,{useEffect,useState} from 'react';
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Login from "./app/screens/login/login/login";
import Register from "./app/screens/login/register/register";
import Home from "./app/screens/Home/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import AntDesign from "react-native-vector-icons/AntDesign";
import { dimension } from "./app/themes/metric/metrics";
import color from "./app/themes/color/color";
import ProductDetail from "./app/screens/productDetail/productDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  console.log(SecureStore.getItemAsync("login"));
  const [isLogin,setIsLogin]=useState(false);

useEffect(()=>{
async function getData(){
  if(await SecureStore.getItemAsync("login")=='true'){
    setIsLogin(true);
  }
}
getData();
},[])



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={async () => {
                    console.log("ekdckekmaaaa");
                    await SecureStore.setItemAsync("login", 'false');
                    setIsLogin(false);
                    navigation.navigate("Login");
                  }}
                >
                  <AntDesign
                    name={"logout"}
                    size={dimension.iconSize}
                    color={color.primaryBlack}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    console.log("ekdckekm");
                    SecureStore.setItemAsync("login", false);
                    navigation.navigate("Login");
                  }}
                >
                  <AntDesign
                    name={"logout"}
                    size={dimension.iconSize}
                    color={color.primaryBlack}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
