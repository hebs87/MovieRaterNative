import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from 'react-native';
import MovieRaterLogo from '../../assets/movie-rater-logo.png';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  let TOKEN = null;

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    TOKEN = await AsyncStorage.getItem('TOKEN');
    if (TOKEN) {
      getMovieList();
    } else {
      props.navigation.navigate('Auth');
    }
  }

  const getMovieList = () => {
    fetch(`${process.env.BASE_URL}/api/movies/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }

  const selectedMovie = movie => {
    // Specify the component we want to pass our params to (the components in the AppNavigator in App.js
    props.navigation.navigate("Details", {movie, title: movie.title});
  }

  return (
    <View>
      <Image
        source={MovieRaterLogo}
        style={styles.logo}
        reziseMode='contain'
      />
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
            <TouchableOpacity onPress={() => selectedMovie(item)}>
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
}

MovieList.navigationOptions = screenProps => ({
  title: 'Movie List',
  headerStyle: {
    backgroundColor: 'orange',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerTitleAlign: 'center',
  headerLeft: () => (
    <Button
      title='Logout'
      color='orange'
      onPress={() => logout(screenProps)}
    />
  ),
  headerRight: () => (
    <Button
      title='Add New'
      color='orange'
      onPress={() => screenProps.navigation.navigate('Edit', {
        movie: {title: '', description: ''},
      })}
    />
  )
});

const logout = async props => {
  await AsyncStorage.removeItem('TOKEN');
  props.navigation.navigate('Auth');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
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
