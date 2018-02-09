import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ChatBody from './ChatBody'
import ChatTest from './chatTest'
import Voice from './Transmit'
export default class Chat extends Component{

    render(){
        return(
            <View style ={styles.container} >
            <View style = {styles.header} >
                <Voice />
                
            </View>
            <ChatTest />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue'
    }
})