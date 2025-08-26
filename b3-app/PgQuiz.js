import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Button } from "./components/Buttons.js";
import { useQuizWS } from "./hooks/useQuizWs.js";

export default function PaginaQuiz({ navigation, route }) {
  const { code, username } = route.params;
  const {
    question,
    scores,
    showQuestion,
    showScoreboard,
    sendAnswer,
    finished,
  } = useQuizWS(code, username);

  // Redireciona automaticamente para a tela de ranking
  useEffect(() => {
    if (finished) {
      navigation.replace("PgRank", { scores, code });
    }
  }, [finished, navigation, code, username]);

  const renderAlternatives = () =>
    question?.alternatives?.map((alt, i) => (
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
    ));

  return (
    <View style={styles.container}>
      {showQuestion && question && (
        <View style={styles.containerTexto}>
          <Text style={styles.texto1}>
            Questão {Number(question.index) - 1}/{Number(question.total) - 1}
          </Text>
          <View style={styles.caixa}>
            <Text style={styles.questao}>{question.text}</Text>
          </View>
          <View style={styles.containerBtns}>{renderAlternatives()}</View>
        </View>
      )}

      {showScoreboard && scores && (
        <View style={styles.containerTexto}>
          <Text style={styles.texto1}>Placar</Text>
          {Object.entries(scores)
            .sort(([, a], [, b]) => b - a)
            .map(([player, score]) => (
              <Text key={player} style={styles.questao}>
                {player}: {score}
              </Text>
            ))}
        </View>
      )}

      {!showQuestion && !showScoreboard && (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#001629",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  caixa: { width: "90%" },
  questao: { fontSize: 20, color: "#fff", textAlign: "center" },
  texto1: { fontSize: 26, color: "#fff", fontWeight: "bold" },
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
