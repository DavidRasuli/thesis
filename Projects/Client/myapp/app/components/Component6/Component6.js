import React, {Component} from 'react';
import {AppRegistry,Text,View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Component4 from "./app/components/Component4/Component4";




export default class Component6 extends React.Component {
    static navigationOptions ={
        title: 'Welcome'
    };
    render() {
        return <Text>Hello NavigationStack</Text>;
    }
}

export const sn = StackNavigator({
    Comp4 : { screen: Component4 }
});

AppRegistry.registerComponent('sn', () => sn);