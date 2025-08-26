import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import BlueButton from "./components/BlueButton";
import * as Clipboard from "expo-clipboard";
import ReturnHome from "./components/ReturnHome";

function CopyCode({ navigation, route }) {
  const { code, nomeSala } = route.params;

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    Alert.alert("Código copiado!", code);
  };

  const startQuiz = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/rooms/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) throw new Error("Erro ao iniciar quiz");

      // Navega para a tela do quiz, que vai usar o hook para WS
      navigation.navigate("PaginaQuiz", { code, username: nomeSala });
    } catch (err) {
      console.error(err);
      Alert.alert("Erro ao iniciar o quiz");
    }
  };

  return (
    <View style={styles.container}>
      <ReturnHome />
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

      <BlueButton text="Começar Quiz" onPress={startQuiz} />
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
  copyView: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 5,
    padding: 15,
    width: "70%",
  },
  copyViewText: { fontSize: 25, fontWeight: "bold", color: "white" },
  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: "5%",
    marginBottom: "10%",
  },
  copyIcon: { width: 50, height: 50 },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "10%",
    marginBottom: 20,
  },
});
