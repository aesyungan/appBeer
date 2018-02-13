/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/Home/HomeScreen';
import SeachTabNavigator from './Components/Search/SeachTabNavigator';
import * as firebase from 'firebase';
//configuracion firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4L-5O3NPef5PHgwo5wKU-Qzcp4nx6z1s",
  authDomain: "appbeer-dcaa9.firebaseapp.com",
  databaseURL: "https://appbeer-dcaa9.firebaseio.com",
  projectId: "appbeer-dcaa9",
  storageBucket: "appbeer-dcaa9.appspot.com",
  messagingSenderId: "505179604207"
};
firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("alexyungan1@gmail.com", "12345678");

export default class App extends Component {
  
  render() {
    return (
      <RootStack />
    );
  }
}
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    SeachTabNavigator: {
      screen: SeachTabNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);
