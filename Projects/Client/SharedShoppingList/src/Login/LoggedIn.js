import React from 'react';
import {AppRegistry,Text,View } from 'react-native';


export default class LoggedIn extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    render() {
        return (
            <View>
                <Text>Logged In!</Text>
            </View>
        );
    }
}


AppRegistry.registerComponent('LoggedIn', () => LoggedIn);