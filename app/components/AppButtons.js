import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButtons({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {},
  title: {},
});
export default AppButtons;
