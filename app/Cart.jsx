import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';

export default function Cart({cart, setWatchingCart, setProduct}) {
  console.log(cart);
  return (
    <View style={styles.container}>
      <Text>Carro de compras.</Text>
      <Link href="/" asChild>
        <Button
          title={"Volver al inicio"}
          onPress={() => {
            setWatchingCart(false);
          }}
        />
      </Link>
      <Link href="/Scanner" asChild>
        <Button
          title={'Escanear producto'}
        />
      </Link>
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