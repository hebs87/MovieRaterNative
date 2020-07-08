import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {baseUrl, token} from "../../env";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/api/movies/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  return (
    <View style={styles.container}>
      {
        loading &&
        <Text>Loading...</Text>
      }
      {
        !loading &&
        <FlatList
          keyExtractor={item => item.uuid}
          data={movies}
          renderItem={({item}) => (
            <Text>{item.title}</Text>
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieList;
