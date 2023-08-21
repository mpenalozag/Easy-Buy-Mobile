import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Scanner from "./Scanner";
import Product from "./Product";
import Cart from "./Cart";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const [cart, setCart] = useState([]);
  const [scanning, setScanning] = useState(false);
  const [product, setProduct] = useState(null);
  const [watchingCart, setWatchingCart] = useState(false);


  function addToCart(newProduct) {
    setCart([...cart, newProduct]);
    setScanning(false);
    setWatchingCart(true);
  }

  if (watchingCart) {
    return <Cart cart={cart} setCart={setCart} setWatchingCart={setWatchingCart} setScanning={setScanning} />
  }

  if (scanning) {
    return <Scanner setProduct={setProduct} setScanning={setScanning} />
  }

  if (product) {
    return <Product product={product} setProduct={setProduct} setScanning={setScanning} addToCart={addToCart} />
  }

  return (
    <View style={styles.container}>
      <Text>EasyBuy</Text>
      <Text>Instántaneo, fácil, seguro</Text>
      <View style={styles.buttons}>
        <Button 
          title={'Escanear producto'} 
          onPress={() => setScanning(true)}
        />
        <Button 
          title={'Ver carro'} 
          onPress={() => setWatchingCart(true)}
        />
      </View>
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
    buttons: {
      marginTop: 30,
      alignItems: "center",
      backgroundColor: "#fff",
      gap: 20,
    }
  });