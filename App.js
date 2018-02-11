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
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
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
    }
  },
  {
    initialRouteName: 'Home',
  }
);
