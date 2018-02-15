import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import ChatBody from './ChatBody'
import ChatTest from './chatTest'
import Voice from './Transmit'
export default class Chat extends Component{

    render(){
        return(
            <View style ={styles.container} >
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.topH} > 
                    <Text style = {styles.txt} > Admin </Text>
                </View>
            <ChatBody />
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
    },
    topH: {
        backgroundColor: '#34495e',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 24
    }
})