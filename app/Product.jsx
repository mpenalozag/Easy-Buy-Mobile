import { StyleSheet, View, Text, Button, Image, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product({ product, setProduct, setScanning, addToCart }) {
  const [productData, setProductData] = useState(null);

  async function requestToApi() {
    try {
      const response = await axios.get(`https://plain-olives-help.loca.lt/product/${product.data}`);
      setProductData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    requestToApi();
  }, []);

  return (
    <View style={styles.container}>
      {(productData === null) ? <ActivityIndicator size="large" color="#2196F3" /> : undefined}
      {productData ? <Image width={250} height={250} source={{uri: productData.productImage}}/> : undefined}
      {productData ? <Text>{productData.productName}</Text> : undefined}
      {productData ? <Text>{productData.productPrice}</Text> : undefined}
      <Button
        title={'Escanear otro producto'}
        onPress={() => setScanning(true)}
      />
      <Button
        title={'Añadir al carro'}
        onPress={() => {
            addToCart(product.data);
            setProduct(null);
          }
        }
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