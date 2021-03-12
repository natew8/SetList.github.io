import React from "react";
import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: { fontSize: 18, fontFamily: "System" },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
