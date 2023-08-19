import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Barcode from './components/Barcode';
import Product from './components/Product';

export default function App() {
  const [product, setProduct] = useState(null);

  if (product) {
    return <Product product={product} setProduct={setProduct} />
  } else {
    return <Barcode setProduct={setProduct} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
