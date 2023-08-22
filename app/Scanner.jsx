import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link, router } from "expo-router";
import Product from "./Product";
import { useIsFocused } from "@react-navigation/native";

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setScanned(false);
      setHasPermission(false);
      async function getScannerPermissions() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      }
      getScannerPermissions();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  //useEffect(() => {
  //  const unsubscribe = navigation.addListener('focus', () => {
  //    setScanned(false);
  //  });
  //  async function getScannerPermissions() {
  //    const { status } = await BarCodeScanner.requestPermissionsAsync();
  //    setHasPermission(status === 'granted');
  //  }
  //  getScannerPermissions();
  //  return unsubscribe;
  //}, [navigation]);

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function handleScannedCode({type, data}) {
    setScanned(true);
    navigation.navigate('Producto', {
      screen: 'Producto',
      params: {
        productCode: data
      }
    });
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScannedCode}
        style={StyleSheet.absoluteFillObject}
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