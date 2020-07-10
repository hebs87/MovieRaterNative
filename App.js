import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
})

const App = createAppContainer(AppNavigator);

export default App;
