import Placar from "./components/Lista.js";
import { StyleSheet, Text, View } from "react-native";

export default function PgRank() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quiz</Text>

      <Placar
        dados={[
          { nome: "Pessoa", pontos: "10/10" },
          { nome: "Pessoa", pontos: "10/10" },
          { nome: "Pessoa", pontos: "10/10" },
          { nome: "Pessoa", pontos: "10/10" },
          { nome: "Pessoa", pontos: "10/10" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#001629",
  },

  titulo: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
