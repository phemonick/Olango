import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ForumBody from './forumBody'

export default class Forum extends Component{

    render(){
        return(
            <View style ={styles.container} >
            <Text > hello am Forum </Text>
            <ForumBody />
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
})