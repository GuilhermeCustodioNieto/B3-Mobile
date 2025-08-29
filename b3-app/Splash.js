import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Splash({ navigation }) {
  const API_BASE = "https://b3-back-end.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/museum`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.log("Dados carregados:", data);

        navigation.replace("Home");
      } catch (err) {
        console.error("Erro ao carregar dados:", err);

        navigation.replace("Home");
      }
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Group 45.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001629",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
