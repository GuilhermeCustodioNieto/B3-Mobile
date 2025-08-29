import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Button({ onPress, text = "", image }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image && <Image source={image} style={styles.img} />}

      <View style={styles.caixa}>
        <Text style={styles.texto}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: 160,
    height: 160,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#0478DD",
    borderStyle: "solid",
    shadowColor: "#12304b",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 15,
  },

  caixa: {
    width: 135,
  },

  img: {
    width: 50,
    height: 50,
  },

  texto: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
