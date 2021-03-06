import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import LessonList from './LessonList'
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation'
import * as Progress from 'react-native-progress';


export default class LessonScheme extends Component{

    constructor(){
        super();
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
         this.props.navigation.goBack();
        //  this.props.navigate('Lessons')
        // return true;
    }

    componentDidMount(){
        const { params } = this.props.navigation.state
        // this.fetchData();
        this.setState({
           topic: params.topic
        })
    }
    static navigationOptions = {
        title: 'contents'
    }
    async fetchData(){
        try{
             const { params } = this.props.navigation.state
            console.log('thisis'+params.language)
            let response = await fetch(`https://olango-api.herokuapp.com/resources/${params.language}/beginner`);
            let responseJson = await response.json();
            this.setState({topic: responseJson})
    
           
        }
        catch(err){
            console.log('error in fetch ' + err)
        }
        }
    
    render(){
        const { params } = this.props.navigation.state
        const { navigate } = this.props.navigation;
        console.log(params.language)
        return(
            <View style = {styles.container}>
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.content} >
                    
                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    </View>
                </View>
                 <View style ={styles.space} >
                    <Text style = {styles.prog} >spanish 30% </Text>
                    <Progress.Bar 
                        progress = {0.3} 
                        height = {30}
                        color = {'#2ecc71'}  
                    />
                </View> 
                <View style = {styles.lessons} >
                    <Text style = {styles.course}>Course : {params.language} </Text>
                    <LessonList language={params.language} navigate={navigate} name={this.state.topic} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#34495e',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 70+'%',
        height: 20+'%',
        marginTop: 20
    },
    space: {
        
    },
    lessons: {
        height: 70+'%',
        marginBottom: 20+'%'
    },
    course: {
        alignSelf: 'center',
        width: 100+ '%',
        fontSize: 20,
        color: '#ecf0f1'
    },
    arrowLogo: {
        width: 50,
        alignSelf: 'flex-start',
        padding: 10,
        marginBottom:10,
        height: 40,
        
    },
    arrow: {
        width: 40,
        height: 20,
        padding: 10
    },
    logoContainer: {
        
        width: 100 + '%',
        alignSelf: 'flex-start'
    },
    logo: {
        width: 100+'%',
        height: 50,  
        resizeMode: 'contain'    
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