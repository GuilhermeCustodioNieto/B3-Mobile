import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function NavBar({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#3A6BB6",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="home" size={26} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Enter");
        }}
      >
        <Ionicons name="play" size={26} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Infos");
        }}
      >
        <Ionicons name="information-circle" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default NavBar;
