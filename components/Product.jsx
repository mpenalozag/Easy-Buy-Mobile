import { StyleSheet, View, Text, Button } from "react-native";

export default function Product({product, setProduct}) {
  return(
    <View style={styles.container}>
      <Text>Producto con código {product.data}</Text>
      <Button
        title={'Escanear otro producto'}
        onPress={() => setProduct(null)}
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
  },
});