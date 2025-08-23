import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Image, TouchableOpacity, Text } from "react-native-web";
import Input from "./components/Input";
import BlueButton from "./components/BlueButton.js";
import ReturnHome from "./components/ReturnHome.js";

function EnterRoom({ navigation }) {
  const [nomeSala, setNomeSala] = useState("");
  const [codigoSala, setCodigoSala] = useState("");

  return (
    <View style={styles.container}>
      <ReturnHome></ReturnHome>
      <Input
        label="Nome de usuário"
        value={nomeSala}
        onChangeText={setNomeSala}
      ></Input>

      <Input
        label="Código da sala"
        value={codigoSala}
        onChangeText={setCodigoSala}
      ></Input>
      <BlueButton text="Entrar na sala"></BlueButton>
    </View>
  );
}

export default EnterRoom;

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
});
