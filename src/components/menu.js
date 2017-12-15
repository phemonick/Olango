import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Menu extends Component {

    static navigationOptions = ((navigation) => {
        title: 'Side menu'
    })
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text style ={styles.pageTitle}> Menu </Text>
                <TouchableOpacity>
                    <Text style ={styles.menus}> Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={styles.menus}> Language Catalog </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={styles.menus}> Completed Courses </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={styles.menus}> Forum </Text>
                </TouchableOpacity>
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    pageTitle: {
        margin: 10,
        color: '#95a5a6', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    menus: {
        borderBottomWidth: 1,
        fontSize: 15,
        padding: 10,
        borderBottomColor: '#95a5a6'
    }
});