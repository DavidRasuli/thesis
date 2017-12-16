import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet,Button,Alert,TouchableHighlight} from 'react-native';


const shoppingListName = [
    {
        name : 'BBQ at David',
        participants : '3',
        status : 'Open'
    },
    {
        name : 'Ester\'s Picnic',
        participants : '4',
        status : 'Closed'
    },
    {
        name : 'Dinner with Eric',
        participants : '20',
        status : 'Closed'
    }
]

export default class Component4 extends Component
{
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            shoppingListDataSource: ds.cloneWithRows(shoppingListName),
        };
    }

    renderRow(shoppingListRow,sectionId,rowId,highlightRow)
    {
        return(

            <TouchableHighlight onPress={() => {this.showAlert(shoppingListRow)}}>
                <View style={styles.row} >
                   <Text style={styles.v1}>{shoppingListRow.name}</Text>
                    <Text style={styles.v2}>{shoppingListRow.participants} </Text>
                    <Text style={styles.v3}>{shoppingListRow.status}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    showAlert(item)
    {
        Alert.alert(
            'Hi , attending '+item.name +'?',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
    }


    render()
    {
        return(
            <View>
                <Text>Component4</Text>
                <ListView
                    dataSource = {this.state.shoppingListDataSource}
                    renderRow = {this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        myView:
            {
                backgroundColor:'blue'
            },
        myText:
            {
                color:'yellow'
            },
        row:
            {
                flexDirection:'row',
                justifyContent:'center',
                height:100,
                marginBottom:3,
                backgroundColor: '#a3f2b1'
            },
        v1:
            {
                flex:5,
                padding:10,
            },
        v2:
            {
                flex:2,
                padding:10,
            },
        v3:
            {
                flex:3,
                padding:10,
            }
    }
);

AppRegistry.registerComponent('Component4', () => Component4);