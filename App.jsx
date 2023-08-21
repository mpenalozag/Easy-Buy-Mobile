import { StyleSheet, View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from 'expo-constants';



export default function App() {
  return (
    <NavigationContainer>
      {
        <View style={styles.container}>
          <View style={styles.elements}>
            <View style={styles.texts}>
              <Text style={styles.title}>EasyCart</Text>
              <Text>Instántaneo, fácil, seguro</Text>
            </View>
            <View style={styles.buttons}>
              <Button
                title={'Escanear producto'}
                onPress={() => alert("Escanear producto")}
              />
              <Button
                title={'Ver carro'}
                onPress={() => alert("Ver carro")}
              />
            </View>
          </View>
        </View>
      }
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