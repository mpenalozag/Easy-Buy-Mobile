import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Home({movie, getRandomMovie}) {
  return(
    <View style={styles.container}>
      <Text>La película es {movie.titleText.text}</Text>
      <Image 
        source={{uri: movie.primaryImage.url}} 
        style={{width: 200, height: 300}}
      />
      <Button
        title="Get Random Movie" 
        onPress={() => getRandomMovie()}
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