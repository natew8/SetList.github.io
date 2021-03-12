import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: colors.black,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
