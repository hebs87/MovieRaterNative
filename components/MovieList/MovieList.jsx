import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <Text>This will be a list</Text>
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
