import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class VCall extends Component {

    constructor(){
        super()

    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text> call  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Video  </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20
    }
})