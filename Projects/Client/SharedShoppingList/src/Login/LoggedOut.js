import React from 'react';
import {AppRegistry,Text,View } from 'react-native';


export default class LoggedOut extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    render() {
        return (
            <View>
                <Text>Logged Out!</Text>
            </View>
        );
    }
}


AppRegistry.registerComponent('LoggedOut', () => LoggedOut);