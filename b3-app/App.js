import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, StyleSheet } from "react-native";
import Splash from "./Splash";
import Home from "./Home";
import Infos from "./Infos";
import CreateRoom from "./CreateRoom";
import EnterRoom from "./EnterRoom";
import CopyCode from "./CopyCode";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CopyCode" component={CopyCode} />
        <Stack.Screen name="EnterRoom" component={EnterRoom} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Infos" component={Infos} />
      </Stack.Navigator>
    </NavigationContainer>
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
