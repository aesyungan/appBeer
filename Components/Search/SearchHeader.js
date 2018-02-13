import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Header, Right, Left, Item, Input } from 'native-base';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class SearchHeader extends Component {
  state = {
    value: ''
  }
  componentWillReceiveProps(nextProps) {
    //console.warn(nextProps);
    this.setState({ value: nextProps.value != this.value ? nextProps.value : this.value });

  }
  render() {
    return (
      <Header searchBar rounded>
        <Item >
          <Icon name='ios-search' />
          <Input
            value={this.state.value}
            onSubmitEditing={this.props.beerSearch}
            returnKeyType='search'
            onChangeText={this.props.onChangeText}
            placeholder='Enter beer name' />
        </Item>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }

});
