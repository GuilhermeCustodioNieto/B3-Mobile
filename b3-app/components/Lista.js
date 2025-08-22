import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Placar({ titulo = "Placar", dados }) {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.pontos}>{item.pontos}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001629",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#007bff",
    padding: 10,
    width: 250,
  },
  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  nome: {
    color: "#fff",
    fontSize: 16,
  },
  pontos: {
    color: "#fff",
    fontSize: 16,
  },
});
