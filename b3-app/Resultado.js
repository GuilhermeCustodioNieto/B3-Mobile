import { Image, StyleSheet, Text, View } from "react-native";
import ReturnHome from "./components/ReturnHome";

export default function Resultado({ text = "", image }) {
  return (
    <View style={styles.container}>
      <ReturnHome></ReturnHome>
      <Image source={image} style={styles.img} />

      <Text style={styles.texto}>{text}</Text>

      <Text style={styles.textoPosicao}>Você está na posição 2º vamos lá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#001629",
    gap: 20,
  },

  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  texto: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },

  textoPosicao: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
});
