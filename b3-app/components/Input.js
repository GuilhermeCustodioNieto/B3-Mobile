import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Input({ label, value, onChangeText }) {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Campo de entrada */}
      <TextInput
        style={styles.input}
        placeholder={`Entre com o ${label.toLowerCase()}`}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    marginLeft: "10px",
  },
  input: {
    borderWidth: 1,
    borderColor: "#007bff", // azul igual ao da borda
    borderRadius: 5,
    padding: 15,
    fontSize: 12,
    color: "white",
    backgroundColor: "#001629", // fundo igual ao app
  },
});
