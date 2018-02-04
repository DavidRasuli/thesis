import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { shoppingLists } from '../config/data';

class MyLists extends  Component{

    onLearnMore = (shoppingList)=>{
      this.props.navigation.navigate('Details',{...shoppingList});

    };

    render() {
        return (
            <ScrollView>
                <List>
                    {shoppingLists.map((shoppingList) => (
                        <ListItem
                            key={shoppingList.id}
                            avatar={{ uri: shoppingList.picture }}
                            title={`${shoppingList.name.toUpperCase()} (${shoppingList.id})`}
                            onPress={() => this.onLearnMore(shoppingList)}
                        />
                    ))}
                </List>
                <Button title="Go to Picture's profile"
                        onPress={() =>
                            this.props.navigation.navigate('PictureManager',{...shoppingLists})
                        }
                />
            </ScrollView>

        );
    }
}

export default MyLists;


