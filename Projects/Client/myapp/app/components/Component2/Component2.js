import React, {Component} from 'react';
import {AppRegistry,Text,View,StyleSheet, TouchableHighlight,TouchableOpacity} from 'react-native';

export default class Component2 extends Component {
    onPress() {
        console.log('TouchableHighlight Pressed');
    }

    onPressOpacity() {
        console.log('TouchableOpacity Pressed');
    }


    render() {
        return (
            <View style={styles.myView}>
                <Text style={styles.myText}>Hello David</Text>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.v1} underlayColor="blue" onPress={this.onPress}>
                        <View>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity style={styles.v2} onPress={this.onPressOpacity} activeOpacity={0.6}>
                        <View>
                            <Text>View 2</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text>View 3</Text>
                    </View>
                </View>
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
        container:
            {
                flexDirection:'row',
                height:100
            },
        v1:
            {
                flex:1,
                backgroundColor:'#162DA9',
                padding:10,
            },
        v2:
            {
                flex:2,
                backgroundColor:'yellow',
                padding:10,
            },
        v3:
            {
                flex:1,
                backgroundColor:'green',
                padding:10,
            }
    }
);

AppRegistry.registerComponent('Component2', () => Component2);
