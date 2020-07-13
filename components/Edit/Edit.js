import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Edit = (props) => {
  // We get the relevant prop (1st argument) and specify a default (2nd argument)
  const movie = props.navigation.getParam('movie', null);
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  const saveMovie = () => {
    fetch(`${process.env.BASE_URL}/api/movies/${movie.id}/`, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${process.env.TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
      })
    })
      .then(res => res.json())
      .then(movie => props.navigation.navigate("Details", {movie, title: movie.title}))
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder='Title'
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder='Description'
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <Button
        title='Save'
        color='orange'
        onPress={() => saveMovie()}
      />
    </View>
  );
}

Edit.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title') ? `Edit: ${screenProps.navigation.getParam('title')}` : 'Add New Movie',
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
  label: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  input: {
    fontSize: 24,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
  },
});

export default Edit;
