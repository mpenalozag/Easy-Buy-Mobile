import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Barcode({ setProduct }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  async function getScannerPermissions() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    getScannerPermissions();
  }, []);

  function handleScannedCode({type, data}) {
    setScanned(true);
    setProduct({type: type, data: data})
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScannedCode}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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