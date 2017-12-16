import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';


export default class Component5 extends Component
{
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            shoppingListDataSource: ds
        };
    }

    fetchUsers()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((response)=>{
                this.setState({
                    shoppingListDataSource: this.state.shoppingListDataSource.cloneWithRows(response)
                });
            })
    }

    componentDidMount()
        {
            this.fetchUsers();
        }



    renderRow(shoppingListRow,sectionId,rowId,highlightRow)
    {
        return(

            <View style={styles.row}>
                <Text style={styles.v1}>{shoppingListRow.name}</Text>
                <Text style={styles.v2}>{shoppingListRow.id} </Text>
                <Text style={styles.v3}>{shoppingListRow.website}</Text>
            </View>
        )
    }

    render()
    {
        return(
            <View>
                <Text>Component5</Text>
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

AppRegistry.registerComponent('Component5', () => Component5);