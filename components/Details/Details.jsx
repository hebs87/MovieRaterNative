import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const Details = (props) => {
  // We get the relevant prop (1st argument) and specify a default (2nd argument)
  const movie = props.navigation.getParam('movie', null);

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.grey} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.grey} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.grey} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.grey} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.grey} icon={faStar}/>
        <Text style={styles.numRatings}>({movie.no_of_ratings})</Text>
      </View>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
}

Details.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
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
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orange: {
    color: 'orange',
  },
  grey: {
    color: '#999'
  },
  numRatings: {
    marginLeft: 5,
    color: 'white',
  },
});

export default Details;
