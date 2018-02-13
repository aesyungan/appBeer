import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button, Container, Content, Right, Left, Header, Spinner } from 'native-base';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
var fondo = require('../../Assets/fondo.jpg');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { cargado: false }
  }
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Spinner style={{ width: this.state.cargado == true ? 0 : '100%', height: this.state.cargado == true ? 0 : '99%' }} color='blue' />
          <Image onLoadEnd={() => this.setState({ cargado: true })} source={fondo} style={{ flex: 1, width: null, height: null }} />
        </View>
        <Button style={styles.btn} onPress={() => this.props.navigation.navigate('SeachTabNavigator')} block={true} >
          <Text style={{ color: 'white' }}>Buscar Cerveza</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    /*
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,*/
  }

});
