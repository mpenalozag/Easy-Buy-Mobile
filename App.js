import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [fetchingData, setFetchingData] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
    params: {
      list: 'top_rated_english_250',
      limit: '1'
    },
    headers: {
      'X-RapidAPI-Key': '52b235e227msh0fe034ed9911bf2p15178ejsndd0809228858',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  async function getRandomMovie() {
    try {
      const response = await axios.request(options);
      setMovieData(response.data.results[0]);
      setFetchingData(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRandomMovie();
  }, [])

  return(
    <View style={styles.container}>
      {fetchingData ? <Loading /> : <Home movie={movieData} getRandomMovie={getRandomMovie} />}
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
