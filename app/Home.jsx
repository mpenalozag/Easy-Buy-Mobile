import { StyleSheet, View, Text, Button } from "react-native";

export default function Home( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button 
        title="Click here"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});