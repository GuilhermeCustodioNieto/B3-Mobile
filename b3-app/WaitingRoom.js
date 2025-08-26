import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuizWS } from "./hooks/useQuizWs";

export default function WaitingRoom({ navigation, route }) {
  const { code, username } = route.params;
  const { players, showQuestion, question } = useQuizWS(code, username);

  // Se o quiz começar, redireciona automaticamente
  useEffect(() => {
    if (showQuestion && question) {
      navigation.replace("PaginaQuiz", { code, username });
    }
  }, [showQuestion, question, navigation, code, username]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sala: {code}</Text>
      <Text style={styles.subtitle}>Você: {username}</Text>
      <Text style={styles.waitingText}>Aguardando o início do quiz...</Text>

      <Text style={styles.playersTitle}>Jogadores na sala:</Text>
      {players.length > 0 ? (
        <FlatList
          data={players}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.player}>{item}</Text>}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001629",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 22, color: "#fff", marginBottom: 30 },
  waitingText: { fontSize: 18, color: "#fff", marginBottom: 20 },
  playersTitle: { fontSize: 20, color: "#00ADEF", marginBottom: 10 },
  player: { fontSize: 18, color: "#fff", marginVertical: 5 },
});
