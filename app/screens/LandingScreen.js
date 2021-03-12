import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButtons from "../components/AppButtons";
import Screen from "../components/Screen";

function landing(props) {
  return (
    <Screen>
      <AppButtons
        onPress={() => console.log("pressed")}
        color="primary"
        title="Register"
      />
      <AppButtons onPress={() => console.log("pressed")} title="Login" />
    </Screen>
  );
}

export default landing;
