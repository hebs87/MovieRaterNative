import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/movies/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${process.env.TOKEN}`
      }
    })
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  return (
    <View>
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
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
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
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35',
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default MovieList;
