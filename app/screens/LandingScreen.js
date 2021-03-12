import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButtons from "../components/AppButtons";
import Screen from "../components/Screen";
import colors from "../config/colors";

function LandingScreen(props) {
  return (
    <Screen>
      <AppButtons
        onPress={() => console.log("pressed")}
        color="primaryBlue"
        title="Register"
        style={{
          color: colors.black,
          fontWeight: "600",
        }}
      />
      <AppButtons
        style={{
          backgroundColor: "transparent",
          color: colors.white,
          fontWeight: "600",
        }}
        onPress={() => console.log("pressed")}
        color="transparent"
        title="Login"
      />
    </Screen>
  );
}

export default LandingScreen;
