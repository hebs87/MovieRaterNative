import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import MovieRaterLogo from './assets/movie-rater-logo.png';

const App = () => {
  return (
    <View>
      <Image
        source={MovieRaterLogo}
        style={styles.logo}
        reziseMode='contain'
      />
      <MovieList/>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginTop: 30,
  },
});

export default App;
