import React from 'react';
import Auth from "./components/Auth/Auth";
import MovieList from "./components/MovieList/MovieList";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  Auth: {screen: Auth},
  MovieList: {screen: MovieList},
  Details: {screen: Details},
  Edit: {screen: Edit},
})

const App = createAppContainer(AppNavigator);

export default App;
