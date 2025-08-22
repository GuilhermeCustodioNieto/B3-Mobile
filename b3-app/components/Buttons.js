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
    boxShadow: " 0px 0px 75px #12304bff",
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
