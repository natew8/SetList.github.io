import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

function AppButtons({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText style={[styles.title, style]}>{title}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "95%",
    borderWidth: 2,
    borderColor: colors.primaryBlue,
  },
  title: {},
});
export default AppButtons;
