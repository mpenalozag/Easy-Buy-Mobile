import { StyleSheet, View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Product({ product, setProduct, addToCart }) {
  return (
    <View style={styles.container}>
      <Text>Producto con código {product.data}</Text>
      <Button
        title={'Escanear otro producto'}
        onPress={() => setProduct(null)}
      />
      <Button
        title={'Añadir al carro'}
        onPress={() => addToCart(product.data)}
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