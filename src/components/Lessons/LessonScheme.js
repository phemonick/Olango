import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, StatusBar, AsyncStorage, Animated } from 'react-native';
import LessonList from './LessonList'
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation'
import * as Progress from 'react-native-progress';
import Fab from '../Fab'

export default class LessonScheme extends Component{

    constructor(){
        super();
        // this._scrollY = new Animated.Value(0);
        this.state = {
            topic: [],
            prog: 0
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

   async componentDidMount(){
        const { params } = this.props.navigation.state
        console.log(params.language)
        const value = await AsyncStorage.getItem(params.language);
        console.log('value in async ', value)
        if (value !== null) {
            this.setState({
                topic: params.topic,
                prog: value
             })
        }
        else{
            this.setState({
                topic: params.topic,
                prog: 0
             })
        }
        // this.fetchData();
        
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
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        // const fabStyle = [{top: 50}, getFabStyleOnScroll(this._scrollY, 20)]
        
        return(
            <View style = {styles.container}>
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                 <View style={styles.topContent} >
                    <View style = {styles.content} >
                        <View style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        </View>
                    </View>
                    <View style ={styles.space} >
                        <Text style = {styles.prog} >{params.language} {parseInt(this.state.prog*100)+'%'} </Text>
                        <Progress.Bar 
                            progress = {this.state.prog} 
                            height = {30}
                            color = {'#2ecc71'}  
                        />
                    </View> 
                </View>
                
                <View style = {styles.lessons} >
                    <Text style = {styles.course}>Course : {params.language} </Text>
                    <LessonList onScrollBeginDrag={(e) => {
                                console.log(e.nativeEvent.contentOffset.y)
                                //  this._scrollY.setValue(e.nativeEvent.contentOffset.y) 
                                }}
                                 language={params.language} navigate={navigate} name={this.state.topic} />
                </View>
                {/* <Fab onPress={()=>alert('FaB')} style={styles.fab} /> */}

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
        paddingTop: 10
        
    },
    topContent: {
        flex: 1,
        // backgroundColor: "red",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        elevation: 6
    },
    content: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // width: 70+'%',
        height: 20+'%',
        marginTop: 20
    },
    space: {
        // flex: 1
    },
    lessons: {
        flex: 3,
        // height: 70+'%',
         marginBottom: 10+'%'
    },
    course: {
        alignSelf: 'center',
        width: 100+ '%',
        fontSize: 20,
        color: '#ecf0f1'
    },
    prog: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    arrowLogo: {
        width: 50,
        alignSelf: 'flex-start',
        padding: 10,
        marginBottom:10,
        height: 40,
        
    },
    fab: {
        position: 'absolute',
        right: 30,
        top: 10
        
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