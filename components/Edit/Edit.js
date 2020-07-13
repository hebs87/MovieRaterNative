import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const Edit = (props) => {
  // We get the relevant prop (1st argument) and specify a default (2nd argument)
  const movie = props.navigation.getParam('movie', null);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Edit {movie.title}</Text>
    </View>
  );
}

Edit.navigationOptions = screenProps => ({
  title: `Edit: ${screenProps.navigation.getParam('title')}`,
  headerStyle: {
    backgroundColor: 'orange',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerTitleAlign: 'center',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
  },
  description: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
});

export default Edit;
