import { StyleSheet, View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from 'expo-constants';

import MainContainer from "./app/MainContainer";
import Product from "./app/Product";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"MainContainer"} component={MainContainer} />
        <Stack.Screen name={"Producto"} component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    marginTop: Constants.statusBarHeight
  },
  elements: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80%",
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#2196F3",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
    marginTop: "auto"
  }
});