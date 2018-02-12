import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator,TabBarBottom } from 'react-navigation';
import SearchTab from './tabNavigator/SearchTab';
import favouritesTab from './tabNavigator/favouritesTab';
const SeachTabNavigator = TabNavigator({
  SeachTab: { screen: SearchTab},
  favouritesTab: { screen: favouritesTab },

}, {
    tabBarOptions: {
      activeTintColor: '#4a8bfc',
      inactiveTintColor: 'gray',
      //showLabel: false,
      showIcon: true,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  });
export default SeachTabNavigator;

