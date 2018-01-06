import React, { Component } from 'react';
import { ScrollView,View,ListView ,Text,StyleSheet} from 'react-native';
import { Tile, List,ListItem } from 'react-native-elements';

class ShoppingListDetails extends Component {


    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            shoppingListDataSource: ds
        };
    }

    fetchUsers() {
        this.setState({
            shoppingListDataSource: this.state.shoppingListDataSource.cloneWithRows(this.props.navigation.state.params.itemsInList)
        });
    }

    componentDidMount() {
        this.fetchUsers();
    }


    renderRow(rowData) {
        return "";// (<Text>{rowData.name}</Text>);
    }


    renderRow(shoppingListRow, sectionId, rowId, highlightRow) {
        return (

            <View style={styles.row}>
                <Text style={styles.v1}>{shoppingListRow.name}</Text>
                <Text style={styles.v2}>{shoppingListRow.volume} </Text>
                <Text style={styles.v3}>{shoppingListRow.measurementUnit}</Text>
            </View>
        )
    }

    render() {
        const {name, measurementUnit, volume} = this.props.navigation.state.params.itemsInList;
        const {nameOfList} = this.props.navigation.state.params.name;

        return (
            <View>
                <ListView
                    dataSource={this.state.shoppingListDataSource}
                    renderRow={this.renderRow.bind(this)}
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
                marginBottom:1,
                backgroundColor: 'ghostwhite'
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

export default ShoppingListDetails;


    /*
    render() {
        //const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;



        return (
            <ScrollView>

                <ListView dataSource={this.props.navigation.state.params.itemsInList}
                //          renderRow={this.renderRow.bind(this)}
                />

                <Tile
                    //imageSrc={{ uri: listName }}
                    featured
                    title={listName}
                    caption={listName}
                />

            </ScrollView>
        );
    }
    /*
}


export default class Component5 extends Component
{







}







/*
                <List>
                    <ListItem
                        title="Email"
                        rightTitle={email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={location.city}
                        hideChevron
                    />
                </List>
                */

