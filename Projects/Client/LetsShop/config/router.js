import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';


import MyLists from '../screens/MyLists';
import Me from '../screens/Me';
import Settings from '../screens/Settings';
import ShoppingListDetails from '../screens/ShoppingListDetails';

export const FeedStack = StackNavigator({
    Feed:{
        screen:MyLists,
        navigationOptions: {
            title: 'My Lists', //D.R. : title of the first page
        },
    },
    Details:{
        screen: ShoppingListDetails,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name.toUpperCase()} ${navigation.state.params.id.toUpperCase()}`,
        }), //D.R. : now we'd like to get the first and last name from the navigation , is thia
    }
});

export const Tabs = TabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed'
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me'
        },
    },
});

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        },
    },
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    Settings: {
        screen: SettingsStack,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});