import React from "react";
import { Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";

function ReturnHome() {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Image style={styles.logo} source={require("../assets/Rectangle.png")} />
    </TouchableOpacity>
  );
}

export default ReturnHome;

const styles = StyleSheet.create({
  logo: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#00ADEF",
    marginBottom: 40,
    width: 160,
    height: 160,
    marginTop: "5rem",
  },
});
