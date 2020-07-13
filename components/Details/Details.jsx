import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const Details = (props) => {
  // We get the relevant prop (1st argument) and specify a default (2nd argument)
  const movie = props.navigation.getParam('movie', null);
  const [stars, setStars] = useState(0)

  const submitRating = () => {
    if (stars > 0 && stars < 6) {
      fetch(`${process.env.BASE_URL}/api/movies/${movie.id}/rate_movie/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${process.env.TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stars
        })
      })
        .then(res => res.json())
        .then(res => {
          setStars(0);
          Alert.alert(movie.title, res.message);
        })
        .catch(error => Alert.alert("Error", error))
    }
  }

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
      <View
        style={{borderBottomColor: '#fff', borderBottomWidth: 2}}
      />
      <Text style={styles.description}>Rate It!</Text>
      <View style={styles.ratingContainer}>
        <FontAwesomeIcon
          style={stars > 0 ? styles.purple : styles.grey}
          icon={faStar}
          size={48}
          onPress={() => setStars(1)}
        />
        <FontAwesomeIcon
          style={stars > 1 ? styles.purple : styles.grey}
          icon={faStar}
          size={48}
          onPress={() => setStars(2)}
        />
        <FontAwesomeIcon
          style={stars > 2 ? styles.purple : styles.grey}
          icon={faStar}
          size={48}
          onPress={() => setStars(3)}
        />
        <FontAwesomeIcon
          style={stars > 3 ? styles.purple : styles.grey}
          icon={faStar}
          size={48}
          onPress={() => setStars(4)}
        />
        <FontAwesomeIcon
          style={stars > 4 ? styles.purple : styles.grey}
          icon={faStar}
          size={48}
          onPress={() => setStars(5)}
        />
        <View>
          <Button
            title='Rate'
            color='orange'
            onPress={() => submitRating()}
          />
        </View>
      </View>
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
  headerRight: () => (
    <Button
      title='Edit'
      color='orange'
      onPress={() => screenProps.navigation.navigate('Edit', {
        movie: screenProps.navigation.getParam('movie'),
        title: screenProps.navigation.getParam('title'),
      })}
    />
  )
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
    color: '#999',
  },
  purple: {
    color: 'purple',
  },
  numRatings: {
    marginLeft: 5,
    color: 'white',
  },
});

export default Details;
