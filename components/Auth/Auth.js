import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {getData();}, [])

  const submit = () => {
    fetch(`${process.env.BASE_URL}/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then(res => saveToken(res.token))
      .then(() => props.navigation.navigate('MovieList'))
      .catch(error => console.log(error))
  }

  const saveToken = async token => {
    await AsyncStorage.setItem('TOKEN', token);
  }

  const getData = async () => {
    const TOKEN = await AsyncStorage.getItem('TOKEN');
    if (TOKEN) props.navigation.navigate('MovieList');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize='none'
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize='none'
        secureTextEntry
      />
      <Button
        title='Login'
        color='orange'
        onPress={() => submit()}
      />
    </View>
  );
}

Auth.navigationOptions = screenProps => ({
  title: 'Login',
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

export default Auth;
