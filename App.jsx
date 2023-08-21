import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Scanner from "./app/Scanner";
import Product from "./app/Product";
import Cart from "./app/Cart";
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
      <View style={styles.navbar}>
      </View>
      <View style={styles.texts}>
        <Text style={styles.title} >EasyBuy</Text>
        <Text>Instántaneo, fácil, seguro</Text>
      </View>
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
  navbar: {
    width: "100%",
    height: 60,
    marginBottom: "auto",
    backgroundColor: "#2196F3"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
  }
});