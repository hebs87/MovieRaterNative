import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = (props) => {
  // We get the relevant prop (1st argument) and specify a default (2nd argument)
  const movie = props.navigation.getParam('movie', null);

  return (
    <View>
      <Text>Details about {movie.title}</Text>
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
  logo: {
    width: '100%',
    marginTop: 30,
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

export default Details;
