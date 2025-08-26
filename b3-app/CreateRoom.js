import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import Input from "./components/Input";
import BlueButton from "./components/BlueButton.js";
import ReturnHome from "./components/ReturnHome.js";

function CreateRoom({ navigation }) {
  const [nomeSala, setNomeSala] = useState("");
  const API_BASE = "http://localhost:8080";

  const createRoom = async () => {
    if (!nomeSala) return Alert.alert("Erro", "Digite seu nome!");
    try {
      const res = await fetch(`${API_BASE}/api/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostName: nomeSala }),
      });
      const data = await res.json();
      const code = data.code;

      navigation.navigate("CopyCode", { code, nomeSala });
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Não foi possível criar a sala.");
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
      <BlueButton text="Criar sala" onPress={createRoom} />
    </View>
  );
}

export default CreateRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001629",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
