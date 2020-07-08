import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {baseUrl, token} from "../../env";

const MOVIES = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/movies/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .catch(error => console.log(error))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.uuid}
        data={movies}
        renderItem={({item}) => (
          <Text>{item.title}</Text>
        )}
      />
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
