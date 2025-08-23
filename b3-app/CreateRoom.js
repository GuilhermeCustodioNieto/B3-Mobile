import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Image, Alert } from "react-native";
import Input from "./components/Input";
import BlueButton from "./components/BlueButton.js";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

function CreateRoom({ navigation }) {
  const [nomeSala, setNomeSala] = useState("");
  const [stompClient, setStompClient] = useState(null);

  // const API_BASE = "https://b3-back-end.onrender.com";
  const API_BASE = "http://localhost:8080";
  // Conecta ao WebSocket
  const connectWebSocket = (code) => {
    const socket = new SockJS(`${API_BASE}/ws`);
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Conectado ao WebSocket da sala:", code);
        client.subscribe(`/topic/rooms/${code}`, (message) => {
          const data = JSON.parse(message.body);
          handleEvent(data);
        });
      },
    });
    client.activate();
    setStompClient(client);
  };

  // Lida com eventos do WebSocket
  const handleEvent = (event) => {
    if (event.type === "PLAYER_JOINNED") {
      Alert.alert("Jogador entrou", event.username);
    } else if (event.type === "QUESTION") {
      console.log("Nova questão:", event.text);
    } else if (event.type === "SCOREBOARD") {
      console.log("Placar:", event.scores);
      if (event.finished) Alert.alert("Quiz finalizado!");
    }
  };

  // Cria sala via API
  const createRoom = async () => {
    console.log(nomeSala);

    if (!nomeSala) return Alert.alert("Erro", "Digite seu nome!");
    try {
      const res = await fetch(`${API_BASE}/api/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostName: nomeSala }),
      });
      const data = await res.json();
      const code = data.code;

      // Conecta WebSocket
      connectWebSocket(code);

      // Redireciona para tela CopyCode passando o código
      navigation.navigate("CopyCode", { code });
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Não foi possível criar a sala.");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Rectangle.png")} />
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
  logo: {
    width: 160,
    height: 160,
    marginTop: 80,
    marginBottom: 40,
  },
});
