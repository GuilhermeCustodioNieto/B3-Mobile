import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Input from "./components/Input";
import BlueButton from "./components/BlueButton.js";
import ReturnHome from "./components/ReturnHome.js";

const API_BASE = "http://localhost:8080"; // ou sua URL real

function EnterRoom({ navigation }) {
  const [nomeSala, setNomeSala] = useState("");
  const [codigoSala, setCodigoSala] = useState("");

  const joinRoom = async () => {
    if (!nomeSala || !codigoSala) {
      return Alert.alert("Erro", "Preencha o nome e o código da sala!");
    }

    try {
      const response = await fetch(`${API_BASE}/api/rooms/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codigoSala, username: nomeSala }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível entrar na sala");
      }

      // Navega para a tela do quiz passando o código e nome do jogador
      navigation.navigate("WaitingRoom", {
        code: codigoSala,
        username: nomeSala,
      });
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Erro",
        "Não foi possível entrar na sala. Verifique o código."
      );
    }
  };

  return (
    <View style={styles.container}>
      <ReturnHome />

      <Input
        label="Nome de usuário"
        value={nomeSala}
        onChangeText={setNomeSala}
      />

      <Input
        label="Código da sala"
        value={codigoSala}
        onChangeText={setCodigoSala}
      />

      <BlueButton text="Entrar na sala" onPress={joinRoom} />
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
    justifyContent: "center",
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
