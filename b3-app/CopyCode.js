import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Image, TouchableOpacity, Text } from "react-native-web";
import Input from "./components/Input";
import BlueButton from "./components/BlueButton.js";

function CopyCode({ navigation, code }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Rectangle.png")} />

      <Text style={styles.title}>Seu código</Text>

      <View style={styles.copyContainer}>
        <View style={styles.copyView}>
          <Text style={styles.copyViewText}>{code ? code : "000000"}</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.copyIcon}
            source={require("./assets/copy-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CopyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001629",
    alignItems: "center",

    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#00ADEF",
    marginBottom: 40,
    width: "160px",
    height: "160px",
    marginTop: "5rem",
  },
  copyView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#007bff", // azul igual ao da borda
    borderRadius: 5,
    padding: 15,
    width: "70%",
    textAlign: "center",
  },
  copyViewText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  copyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: "5%",
  },
  copyIcon: {
    width: "50px",
    height: "50px",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: "10%",
    marginBottom: 20,
    color: "#fff",
  },
});
