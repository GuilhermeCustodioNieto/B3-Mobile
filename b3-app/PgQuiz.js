import { Button } from "./components/Buttons.js";
import { StyleSheet, Text, View } from "react-native";

export default function PaginaQuiz() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.texto1}>Questão 1</Text>
        <View style={styles.caixa}>
          <Text style={styles.questao}>PIRIRIPOPOPOPo</Text>
        </View>
      </View>
      <View style={styles.containerBtns}>
        <View style={styles.linhaBtns}>
          <Button
            onPress={() => alert("Clicou!")}
            text="2200"
            image={require("./assets/triangulo.png")}
          />

          <Button
            onPress={() => alert("Clicou!")}
            text="2500"
            image={require("./assets/circulo.png")}
          />
        </View>
        <View style={styles.linhaBtns}>
          <Button
            onPress={() => alert("Clicou!")}
            text="2100"
            image={require("./assets/quadrado.png")}
          />

          <Button
            onPress={() => alert("Clicou!")}
            text="1900"
            image={require("./assets/losango.png")}
          />
        </View>
      </View>
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

  linhaBtns: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
});
