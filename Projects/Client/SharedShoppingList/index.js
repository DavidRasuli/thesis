import { AppRegistry,View,Text } from 'react-native';
import React from 'react';
import firebase from 'react-native-firebase';

// Components to display when the user is LoggedIn and LoggedOut

// Screens for logged in/out - outside the scope of this tutorial
import LoggedIn from './src/Login/LoggedIn';
import LoggedOut from './src/Login/LoggedOut';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    /**
     * When the App component mounts, we listen for any authentication
     * state changes in Firebase.
     * Once subscribed, the 'user' parameter will either be null
     * (logged out) or an Object (logged in)
     */
    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }

    /**
     * Don't forget to stop listening for authentication state changes
     * when the component unmounts.
     */
    componentWillUnmount() {
        this.authSubscription();
    }

    render() {

        return(<View><Text>Hi</Text></View>)
        /*Uncomment
        // The application is initialising
        if (this.state.loading) return null;

        // The user is an Object, so they're logged in
        if (this.state.user) return <LoggedIn />;

        // The user is null, so they're logged out
        return <LoggedOut />;
        */
    }

    onLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }

    onRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }
}


AppRegistry.registerComponent('SharedShoppingList', () => App);
