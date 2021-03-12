import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppButtons from "../components/AppButtons";
import AppText from "../components/AppText/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function LandingScreen(props) {
  return (
    <Screen>
      <AppText>Setist</AppText>
      <View style={styles.buttonBox}>
        <AppButtons
          onPress={() => console.log("Register")}
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
          onPress={() => console.log("Login")}
          color="transparent"
          title="Login"
        />
      </View>
      <TouchableOpacity
        style={styles.guestBox}
        onPress={() => console.log("guest")}
      >
        <Text style={styles.guest}>Continue as guest</Text>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  buttonBox: {
    width: "100%",
    alignItems: "center",
  },
  guestBox: {
    paddingRight: 20,
    alignItems: "flex-end",
  },
  guest: {
    color: colors.grey,
    marginVertical: 10,
  },
});
export default LandingScreen;
