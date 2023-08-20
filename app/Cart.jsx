import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';

export default function Cart({ cart, setWatchingCart, setScanning }) {
  return (
    <View style={styles.container}>
      <Text>Carro de compras.</Text>
      <Button
        title={"Volver al inicio"}
        onPress={() => {
          setWatchingCart(false);
        }}
      />
      <Button
        title={'Escanear producto'}
        onPress={() => {
          setWatchingCart(false);
          setScanning(true);
        }}
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