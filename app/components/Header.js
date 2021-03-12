import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={{ color: colors.white }}>Logo</Text>
      <Ionicons
        name="ios-notifications-outline"
        color={colors.grey}
        size={35}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingTop: 30,
    width: "100%",
    height: "11.5%",
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.blackDark,
  },
});

export default Header;
