import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LessonList from './LessonList'

export default class Lessons extends Component{

    componentDidMount(){
        this.beginnerData();
    }

   async beginnerData(){
    try{
        const { params } = this.props.navigation.state
        console.log(params.name)
        let response = await fetch(`https://olango-api.herokuapp.com/resources/${params.name}/beginner`);
        let responseJson = await response.json();
        console.log(responseJson)
    }
    catch(err){
        console.log('error in fetch ' + err)
    }
    }

    render(){
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state
        return(
            <View style = {styles.container}>
                <View style = {styles.content} >
                 <TouchableOpacity onPress = {()=> navigate('LessonScheme', {language: params.name}) }  style = {styles.beginers} > 
                     <Text style = {styles.text}> Beginers </Text>
                 </TouchableOpacity> 
                 <TouchableOpacity style = {styles.intermediate} > 
                     <Text style = {styles.text}> Intermediates </Text>
                 </TouchableOpacity> 
                 <TouchableOpacity style = {styles.advanced} > 
                     <Text style = {styles.text}> Advanced </Text>
                 </TouchableOpacity> 
                 <Text> {params.name} </Text>
                </View>
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
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: 100 + '%',
        height: 100+ '%',
        alignItems: 'center'
    },
    beginers: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40+ '%',
        height: 20+ '%',
        backgroundColor: '#f39c12',
        
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    intermediate: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40+ '%',
        height: 20+ '%',
        backgroundColor: '#2ecc71'
    },
    advanced: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40+ '%',
        height: 20+ '%',
        backgroundColor:'#e74c3c'
    }
})