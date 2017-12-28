import{GoogleSignin,GoogleSigninButton} from 'react-native-google-signin';
import React, {Component} from 'react';
import {
    View,AppRegistry
} from 'react-native';

export default class entry extends Component
{
    render()
    {
        return(
            <GoogleSigninButton
                style={{width: 48,height: 48}}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}

            />
        )
    }
}

AppRegistry.registerComponent('ShopTogather', () => entry);