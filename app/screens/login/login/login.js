/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from "react-native";
import { Text } from "react-native-paper";
import Buttons from "../../../component/atoms/button/button";
import Heading from "../../../component/atoms/text/heading";
import InputLable from "../../../component/molecules/inputLabel";
import FlexBoxTowContainer from "../../../containers/flexboxwithGap";
import ScreenContainer from "../../../containers/screenContainer";
import labelStyle from "../../../styles/label/label";
import viewsStyle from "../../../styles/view/view";
import color from "../../../themes/color/color";
import margin from "../../../themes/commonStyle";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;
  const navigations = useNavigation();

  function pressBtn() {
    if (email == "" || password == "") {
      ToastAndroid.show("Please fill all fields !", ToastAndroid.SHORT);
      return;
    }

    axios
      .post(
        "https://ecommerce87.herokuapp.com/api/v1/login",
        {
          email: email,
          pass: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
            credentials: "include",
          },
        }
      )
      .then(async (res) => {
        console.log(res);
        console.log(await SecureStore.getItemAsync("login"));
        await SecureStore.setItemAsync("login", 'true');
        console.log(await SecureStore.getItemAsync("login"));
        navigations.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ScreenContainer>
      <View style={style.upperView}>
        <View style={viewsStyle.headingAndInputView}>
          <Heading heading="Welcome back to Mega Mall" />
          <Text style={labelStyle.smallText}>Sign in your account here</Text>
        </View>
        <View>
          <InputLable
            text="Email"
            placeholder="Type your email"
            callBack={setEmail}
          />
          <InputLable
            text="Password"
            placeholder="Type your password"
            type="password"
            callBack={setPassword}
          />
        </View>
      </View>

      <View style={style.lowerView}>
        <KeyboardAvoidingView
          style={style.lowerView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
          enabled={Platform.OS === "ios"}
        >
          <View style={style.buttonContainer}>
            <Buttons disabled={true} text="Sign in" callBack={pressBtn} />
          </View>
          <View style={style.lowerButtons}>
            <FlexBoxTowContainer
              leftItem={<Text></Text>}
              rightItem={
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={{ color: color.primaryBlue }}
                >
                  Sign Up
                </Text>
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScreenContainer>
  );
}

const style = StyleSheet.create({
  upperView: {
    marginBottom: margin.buttonAndInputMargin,
  },
  lowerButtons: {
    flex: 1,
  },
  buttonContainer: {
    flex: 7,
  },
  lowerView: {
    flex: 1,
  },
});

export default Login;
