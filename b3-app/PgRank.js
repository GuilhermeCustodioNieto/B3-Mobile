import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useQuizWS } from "./hooks/useQuizWs";

export default function PgRank({ navigation, route }) {
  const { code, scores } = route.params;

  const [finalScores, setFinalScores] = useState([]);

  // Atualiza e ordena os scores quando chegam ou quando o quiz termina
  useEffect(() => {
    if (scores) {
      const sorted = Object.entries(scores)
        .map(([player, score]) => ({ player, score }))
        .sort((a, b) => b.score - a.score); // do maior para o menor
      setFinalScores(sorted);
    }
  }, [scores]);

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.rank}>{index + 1}º</Text>
      <Text style={styles.player}>{item.player}</Text>
      <Text style={styles.points}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking Final</Text>

      {finalScores.length > 0 ? (
        <FlatList
          data={finalScores}
          renderItem={renderItem}
          keyExtractor={(item) => item.player}
          style={styles.flatList}
        />
      ) : (
        <Text style={styles.waiting}>Aguardando resultados...</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  waiting: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#444",
  },
  rank: {
    fontSize: 20,
    color: "#FFD700",
    width: "15%",
    fontWeight: "bold",
  },
  player: {
    fontSize: 20,
    color: "#fff",
    width: "60%",
  },
  points: {
    fontSize: 20,
    color: "#fff",
    width: "25%",
    textAlign: "right",
  },
  flatList: {
    width: "100%",
  },
});
