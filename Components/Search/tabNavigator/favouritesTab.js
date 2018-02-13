import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import { TabNavigator } from 'react-navigation';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
import { Icon, Container,Thumbnail, Header, Body, Right, Left, Content, ListItem } from 'native-base';
import * as firebase from 'firebase'

var data = []
var currrentUser;
export default class favouritesTab extends Component {
    constructor(props) {
        super(props)

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            listViewData: data
        }
    }
    componentDidMount() {

        this.getFavourites();


    }
    getFavourites = async () => {

        currentUser = await firebase.auth().currentUser;

        var that = this

        firebase.database().ref(currentUser.uid).child('favourites').on('child_added', function (data) {
            //ejecuta el  numero de datos que tenga
            var newData = [...that.state.listViewData];//mas los datos q ya estan


            newData.push(data);

            that.setState({ listViewData: newData })
            // console.warn(that.listViewData);
        })
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-star" style={{ color: tintColor }} />
        ),
        title: 'Favourites'
    }
    render() {
        //console.warn(this.state.listViewData);

        return (
            <Container style={{ flex: 1, backgroundColor: 'white'}}>
                <Header>
                    <Left>
                        <Icon name="ios-star-half" />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20 }}>Favourites</Text>
                    </Body>
                    <Right>
                        <Icon name="md-help" />
                    </Right>

                </Header>
                <Content >
                    <ListView

                        enableEmptySections
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>

                            <ListItem  onPress={() => this.props.navigation.navigate('SeachTabNavigator', { beerName: data.val().name })}>
                                <Right>
                                <Thumbnail style={{ marginHorizontal: 20, borderColor: 'pink', borderWidth: 2 }} source={data.val().img==''? require('../../../Assets/cerveza1.jpg'):{uri:data.val().img}}/>
                                </Right>
                                <Body>
                                    <Text> {data.val().name}</Text>
                                </Body>
                            </ListItem>
                        }
                    />
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
