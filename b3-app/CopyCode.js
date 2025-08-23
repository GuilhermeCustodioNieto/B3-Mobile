import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import BlueButton from "./components/BlueButton";
import * as Clipboard from "expo-clipboard";

function CopyCode({ route }) {
  const { code } = route.params; // pega o código da sala

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    Alert.alert("Código copiado!", code);
  };

  function startQuiz() {
    // Lógica para começar o quiz
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Rectangle.png")} />

      <Text style={styles.title}>Seu código</Text>

      <View style={styles.copyContainer}>
        <View style={styles.copyView}>
          <Text style={styles.copyViewText}>{code || "000000"}</Text>
        </View>
        <TouchableOpacity onPress={copyToClipboard}>
          <Image
            style={styles.copyIcon}
            source={require("./assets/copy-icon.png")}
          />
        </TouchableOpacity>
      </View>
      <BlueButton
        text="Começar Quiz"
        onPress={startQuiz}
        style={styles.startBtn}
      ></BlueButton>
    </View>
  );
}

export default CopyCode;

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
  copyView: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 5,
    padding: 15,
    width: "70%",
  },
  copyViewText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: "5%",
  },
  copyIcon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "10%",
    marginBottom: 20,
  },
  startBtn: {
    marginTop: "20%",
  },
});
