import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
import { Icon } from 'native-base';

type Props = {};
export default class favouritesTab extends Component<Props> {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-star" style={{ color: tintColor }} />
        ),
        title: 'Favourites'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>favourites tab</Text>
            </View>
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
