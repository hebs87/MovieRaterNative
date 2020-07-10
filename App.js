import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import Details from "./components/Details/Details";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
  Details: {screen: Details},
})

const App = createAppContainer(AppNavigator);

export default App;
