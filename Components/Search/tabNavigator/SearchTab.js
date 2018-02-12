import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Keyboard
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Container, Header, Content, Right, Left } from 'native-base';
import SearchHeader from './SearchHeader';
import axios from 'axios';
type Props = {};
export default class SearchTab extends Component<Props> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-beer" style={{ color: tintColor }} />
    ),
    title: 'Search'
  }
  state = {
    searchBeer: '',
    beerData: {}
  }
  beerSearch = () => {
    Keyboard.dismiss();
    // alert('Search for beer' + this.state.searchBeer);
    const beerName = this.state.searchBeer.toLowerCase();//convierte a minusculas
    //console.warn(beerName);
    //http://www.brewerydb.com/ consume de esta direccion las apis
    //http://api.brewerydb.com/v2/?key=d9238ceeb9bd0907e6869bc7910276bc

    //const query="http://api.brewerydb.com/v2/search?q="+beerName+"&type=beer&key=d9238ceeb9bd0907e6869bc7910276bc";
    const query = "https://api.brewerydb.com/v2/search?q=" + beerName + "&type=beer&key=2e97681b46666b733eaf24a940bc7e85";
    //console.warn(query);
    axios.get(query)
      .then(function (response) {//siempree manda dentro de data el axios los datos del servidor
        if (response.data.data)
          var data = response.data.data;
        else
          var data = [];
        console.warn(data);
      })
      .catch(function (error) {

        console.warn("error" + error);

      });
  }
  render() {
    return (
      <Container>
        <SearchHeader
          onChangeText={(value) => this.setState({ searchBeer: value })}
          value={this.state.searchBeer}
          beerSearch={this.beerSearch}
        />
        <Content>

        </Content>
      </Container>
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
