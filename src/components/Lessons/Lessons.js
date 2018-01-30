import React, { Component } from 'react';
import { View, Text,Alert, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { BackHandler } from 'react-native';

import LessonList from './LessonList'
  

export default class Lessons extends Component{

    static navigationOptions(){
        header: null
    }

    constructor(){
        super();
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            topic: []
        }
        
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        //  this.props.navigation.goBack();
         this.props.navigation.navigate('Hom')
        return true;
    }
    
    componentDidMount(){
        this.beginnerData();
    }
    next(){
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state
        if(this.state.topic.length===0){
            alert('poor network connection')
        }
        else{
            navigate('LessonScheme', {language: params.name, topic: this.state.topic})
        }
         
    }

   async beginnerData(){
    try{
        const { params } = this.props.navigation.state
        const { navigate } = this.props.navigation;
        console.log(params.name)
        let response = await fetch(`https://olango-api.herokuapp.com/resources/${params.name}/beginner`);
        let responseJson = await response.json();
        
        console.log(responseJson)   
        // let res = await response.json()

        // if(responseJson.login){
        //     console.log(responseJson) 
        //     //remove token
            
        //        //navigate to login
        //        navigate('Login')
        // }
        this.setState({topic: responseJson})
    }
    catch(err){
        console.log('error in fetch ' + err)
    }
    }

    render(){
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state
        // this.props.navigation.dispatch(backAction)
        return(
            <View style = {styles.container}>
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.content} >
                <Text style ={styles.topT} > {params.name.toUpperCase()} </Text>
                 <TouchableOpacity onPress = {this.next.bind(this) }  style = {styles.beginers} > 
                     <Text style = {styles.text}> Beginner </Text>
                 </TouchableOpacity> 
                 <TouchableOpacity style = {styles.intermediate} > 
                     <Text style = {styles.text}> Intermediate </Text>
                 </TouchableOpacity> 
                 <TouchableOpacity style = {styles.advanced} > 
                     <Text style = {styles.text}> Advanced </Text>
                 </TouchableOpacity> 
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
    topT: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 30,
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