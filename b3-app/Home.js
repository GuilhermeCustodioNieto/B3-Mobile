import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

export default function Home({ navigation }) {
  const handlePressLink = () => {
    <Image style={styles.logo} source={require("./assets/Rectangle.png")} />;
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} source={require("./assets/Rectangle.png")} />
      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("Infos");
        }}
      >
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("CreateRoom");
        }}
      >
        <Text style={styles.buttonText}>Criar sala privada</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("EnterRoom");
        }}
      >
        <Text style={styles.buttonText}>Entrar em sala</Text>
      </TouchableOpacity>
      {/* Link para o site */}
      <TouchableOpacity onPress={handlePressLink}>
        <Text style={styles.link}>Acessar Site Oficial da B3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001629",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#00ADEF",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1D2945",
    width: "100%",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  link: {
    color: "#00ADEF",
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
