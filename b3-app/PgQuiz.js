import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { Button } from "./components/Buttons.js";

export default function PaginaQuiz({ navigation, route }) {
  const { code, username } = route.params; // código da sala e nome do jogador
  const [stompClient, setStompClient] = useState(null);
  const [question, setQuestion] = useState(null);
  const API_BASE = "http://localhost:8080";
  const [scores, setScores] = useState(null); // placar atual
  const [showQuestion, setShowQuestion] = useState(false); // controlar visibilidade da pergunta
  const [showScoreboard, setShowScoreboard] = useState(false); // controlar visibilidade do placar

  // Conectar no WebSocket quando entrar na tela
  useEffect(() => {
    const socket = new SockJS(`${API_BASE}/ws`); // ⚠️ troque pela URL real
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    client.onConnect = () => {
      console.log("Conectado ao WS");
      client.subscribe(`/topic/rooms/${code}`, (message) => {
        const event = JSON.parse(message.body);
        handleEvent(event);
      });
    };

    client.activate();
    setStompClient(client);

    return () => client.deactivate();
  }, []);

  const handleEvent = (event) => {
    if (event.type === "QUESTION") {
      setQuestion(event);
      setShowQuestion(true); // mostra a pergunta
      setShowScoreboard(false); // esconde o placar
    } else if (event.type === "SCOREBOARD") {
      setScores(event.scores);
      setShowScoreboard(true); // mostra o placar
      setShowQuestion(false); // esconde a pergunta
      if (event.finished) {
        Alert.alert("Quiz finalizado!");
      }
    }
  };

  const sendAnswer = (format) => {
    if (!stompClient || !stompClient.connected) return;

    stompClient.publish({
      destination: `/app/rooms/${code}/answer`,
      body: JSON.stringify({ username, format }),
    });
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto1}>Aguardando pergunta...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showQuestion && question && (
        <View style={styles.containerTexto}>
          <Text style={styles.texto1}>
            Questão {question.index}/{question.total}
          </Text>
          <View style={styles.caixa}>
            <Text style={styles.questao}>{question.text}</Text>
          </View>

          <View style={styles.containerBtns}>
            {question.alternatives.map((alt, i) => (
              <Button
                key={i}
                onPress={() => sendAnswer(alt.format)}
                text={alt.text}
                image={
                  i === 0
                    ? require("./assets/triangulo.png")
                    : i === 1
                    ? require("./assets/circulo.png")
                    : i === 2
                    ? require("./assets/quadrado.png")
                    : require("./assets/losango.png")
                }
              />
            ))}
          </View>
        </View>
      )}

      {showScoreboard && scores && (
        <View style={styles.containerTexto}>
          <Text style={styles.texto1}>Placar</Text>
          {Object.entries(scores).map(([player, score]) => (
            <Text key={player} style={styles.questao}>
              {player}: {score}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#001629",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  caixa: {
    width: "90%",
  },
  questao: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  texto1: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
  containerTexto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    margin: 10,
    gap: 10,
  },
  containerBtns: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    gap: 15,
  },
});
