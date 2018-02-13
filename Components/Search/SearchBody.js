import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Header, Right, Left, Item, Input, Content, Container, List, ListItem } from 'native-base';
import * as firebase from 'firebase'
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class SearchBody extends Component {
    /*
        constructor(props) {
            super(props);
            console.warn(props);
        }*/
    addToFavourites = (data) => {
        //get current user 
        var currentUser = firebase.auth().currentUser;
        //get a unique key 
        var databaseRef = firebase.database().ref(currentUser.uid).child('favourites').push();
        var dataBase = firebase.database().ref(currentUser.uid).child('favourites').orderByChild('name').equalTo(data.name).on("value", function (snapshot) {
            //si no esta en la base inserta
            if (snapshot.val() == null) {
                databaseRef.set({
                    'name': data.name?data.name:'',
                    'category':data.style.category? data.style.category.name:'',
                    'description': data.description? data.description:'',
                    'abv': data.abv?data.abv:'',
                    'isOrganic': data.isOrganic == 'Y' ? 'Yes' : 'No',
                    'available': data.available ? data.available.description : ' No info',
                    'img': data.labels ? data.labels.large : '',
                });
            }


            /*snapshot.forEach(function (data) {
                console.log(data.key);
            });*/
        });


    }
    render() {
        const beerData = this.props.bodyData;
        return (
            <Content >
                <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <Image source={beerData.labels ? { uri: beerData.labels.large } : require('../../Assets/cerveza1.jpg')} style={{ height: 200, width: 200 }} />

                </ListItem>

                <List style={{ backgroundColor: 'white' }}>
                    <ListItem itemDivider>

                        <Text>Name</Text>
                    </ListItem>
                    <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text>{beerData.name}</Text>
                        </View>
                        <View >
                            <Button onPress={() => this.addToFavourites(beerData)} title="+ Favourites"></Button>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Category</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.style.category.name}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Description</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.description}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Rating</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.abv}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Is is Organic?</Text>
                    </ListItem>
                    <ListItem>
                        <Text> {beerData.isOrganic == 'Y' ? 'Yes' : 'No'} </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>
                            <Text> Availablity</Text>
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.available ? beerData.available.description : ' No info'}</Text>
                    </ListItem>
                </List>
            </Content>
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
