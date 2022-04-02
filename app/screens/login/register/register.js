/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../../../component/atoms/button/button";
import Heading from "../../../component/atoms/text/heading";
import InputLable from "../../../component/molecules/inputLabel";
import ScreenContainer from "../../../containers/screenContainer";
import labelStyle from "../../../styles/label/label";
import viewsStyle from "../../../styles/view/view";
import color from "../../../themes/color/color";
import margin from "../../../themes/commonStyle";
import * as SecureStore from "expo-secure-store";

function Register({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  const navigations = useNavigation();

  function pressBtn() {
    if (email == "" || password == "") {
      ToastAndroid.show("Please fill all fields !", ToastAndroid.SHORT);
      return;
    }

    axios
      .post(
        "https://ecommerce87.herokuapp.com/api/v1/register",
        { name: name, phone: phone, email: email, pass: password },
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
            credentials: "include",
          },
        }
      )
      .then((res) => {
        console.log(res);
        SecureStore.setItemAsync("login", true);
        navigations.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ScreenContainer>
    <ScrollView>
      <View style={style.upperView}>
        <View style={viewsStyle.headingAndInputView}>
          <Heading heading="Register" />
          <Text style={labelStyle.smallText}>
            Enter Email and password for register{" "}
          </Text>
        </View>
        <View>
          <InputLable
            callBack={setEmail}
            text="Email"
            placeholder="Type your email"
          />
          <InputLable
            callBack={setName}
            text="Name"
            placeholder="Type your name"
          />
          <InputLable
            callBack={setPhone}
            text="Phone Number"
            placeholder="Type your phone number"
          />
          <InputLable
            callBack={setAddress}
            text="Address"
            placeholder="Type your address"
          />
          <InputLable
            text="Password"
            callBack={setPassword}
            placeholder="Type your password"
            type="password"
          />
        </View>
      </View>

      <View style={style.lowerView}>
        <View style={style.buttonContainer}>
          <Buttons disabled={true} text="Sign up" callBack={pressBtn} />
        </View>
        <View style={style.lowerButtons}>
          <Text style={labelStyle.smallText}>
            Have an Account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: color.primaryBlue }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const style = StyleSheet.create({
  upperView: {
    marginBottom: margin.buttonAndInputMargin,
  },
  lowerButtons: {
    flex: 1,
    alignItems: "center",
  },
});

export default Register;
