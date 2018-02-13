import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Keyboard
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Container,Body, Spinner, Header, Content, Right, Left } from 'native-base';
import SearchHeader from '../SearchHeader';
import SearchBody from '../SearchBody';
import axios from 'axios';
export default class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBeer: '',
      beerData: {},
      beerFount: false,
      searching: false,
      nodataFind:false,
    }
    //console.warn("contru");

  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-beer" style={{ color: tintColor }} />
    ),
    title: 'Search',

  }
  componentDidMount() {
    //conprueba si mandaron mapametros en navigate
    if (this.props.navigation.state.params) {
      //optiene el nombre de la cerveza y muestra datos
      //es asincronico  por lo cual se debe poner q luego de q signe el state realiza la funcion de buscar
      this.setState({ searchBeer: this.props.navigation.state.params.beerName }, () => this.beerSearch());

    } else {
      //console.warn("no parrams");

    }
  }

  beerSearch = () => {
    //no hay datos

    //show spinner
    this.setState({ searching: true ,nodataFind:false});
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
      .then((response) => {//siempree manda dentro de data el axios los datos del servidor
        this.setState({ searching: false });
        this.setState({ beerData: response.data.data ? response.data.data[0] : {}, beerFount: response.data.data ? true : false ,nodataFind: response.data.data ? false : true });
      })
      .catch((error) => {
        this.setState({ beerFount: false });
        console.warn("error" + error);
        //ya no esta buscando
        this.setState({ searching: false });
      });
  }
  renderContent = () => {
    if (this.state.beerFount) {
      //console.warn(this.state.beerData);
      return (<SearchBody bodyData={this.state.beerData} />);
    } else {
      //alert('Beer not fount');
    }
  }

  renderSpinner = () => {
    if (this.state.searching) {
      return (<Spinner color='blue' />);
    }
  }
  renderNoDataFind = () => {
    if (this.state.nodataFind) {
      return (<Body style={{paddingVertical:20}} ><Text style={{ fontSize:18,color:'grey'}}>No Find Data</Text></Body>);
    }
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
          {this.renderContent()}
          {this.renderSpinner()}
          {this.renderNoDataFind()}
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
