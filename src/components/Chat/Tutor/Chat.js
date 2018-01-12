import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChatBody from './ChatBody'
export default class Chat extends Component{

    render(){
        return(
            <View style ={styles.container} >
            <Text > hello am chat </Text>
            <ChatBody />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex'
    },
})