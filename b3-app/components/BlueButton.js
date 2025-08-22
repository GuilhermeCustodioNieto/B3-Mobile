import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";

function BlueButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Criar sala</Text>
    </TouchableOpacity>
  );
}

export default BlueButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0478DD",
    width: "100%",
    height: "50px",
    borderRadius: "10px",
    display: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "17px",
  },
});
