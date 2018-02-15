import React, {Component} from 'react';
import { Text, View,StatusBar, StyleSheet } from 'react-native';
import ForumBody from './forumBody'
import General from './General'

export default class Forum extends Component{

    render(){
        return(
            <View style ={styles.container} >
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.topH} > 
                    <Text style = {styles.txt} > General Forum </Text>
                </View>
                <General />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex'
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