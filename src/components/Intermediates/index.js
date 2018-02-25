import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Text, FlatList, ScrollView, Image ,TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { BackHandler } from 'react-native';

let totalCount = 0

export default class Intermediates extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            content: '',
            prog: ''
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        //  this.props.navigation.goBack();
         this.props.navigation.navigate('Lessons')
        return true;
    }

    async componentDidMount(){
        const { params } = this.props.navigation.state
        console.log(params.language)
        const value = await AsyncStorage.getItem(`${params.language}intermediates`);
        console.log('value in async ', value)
        if (value !== null) {
            this.setState({
                content: params.content,
                prog: value
             })
        }
        else{ 
            this.setState({
                topic: params.content,
                prog: 0
             })
        }
        // this.fetchData();
        
    }
    calculateTotal(){
        const { params } = this.props.navigation.state
        let data = params.content
        let value = 0
        for(let i = 0; i < data.length; i++  ){
            console.log(i)
            value = i
        }
        totalCount = value
        return value
    }

    async videoCount(video){
        
        try {
            const { params } = this.props.navigation.state
            const value = await AsyncStorage.getItem(`${params.language}intermediates`);
            console.log('value in async,', value);
            if (value !== null){
                let data = value
                console.log('value,', value);
                data = parseFloat(value)
                let one = 1/totalCount
                console.log('one ', one)
                let per = + data + one
                console.log(per)
                if (per < 1.1){
                    await AsyncStorage.setItem(`${params.language}intermediates`, `${per}`)
                }    
        console.log(totalCount)
            }
            else{
                let data = 1/totalCount
                await AsyncStorage.setItem(`${params.language}intermediates`, `${data}`)
              console.log('no token yet')
              // We have data!!
             
            }
          } catch (error) {
            // Error retrieving data
            console.log(error)
          }
        
      this.props.navigation.navigate('Screen', {video: video} )
    }
    data(questions){
        const { params } = this.props.navigation.state
        console.log(params)

        this.props.navigation.navigate('Scheme', {exercise: questions, language:params.language} )

        
    }

    render(){
        const { params } = this.props.navigation.state
        this.calculateTotal()
        // console.log(params.content)
        return(
            <View style = {styles.container}> 
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                        networkActivityIndicatorVisible={false}
                        translucent={true}
                        barStyle="light-content" />
                <View style={styles.topContent} >
                    <View style = {styles.logC} >
                        <View style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        </View>
                    </View>
                    <View style ={styles.space} >
                        <Text style = {styles.prog} >{params.language}</Text>
                        <Progress.Bar 
                            progress = {this.state.prog} 
                            height = {30}
                            color = {'#2ecc71'}  
                        />
                    </View> 
                </View>
                <View style = {styles.lessonBody} >
                    <FlatList 
                        data = {params.content}
                        keyExtractor={(x,i)=> i}
                        renderItem = { ({item})=>
                            <View style = {styles.flatCard} >
                                <Text style= {[styles.text, styles.title ]} > <Icon name="title" size={29} color={'#fff'} style = {[styles.myIc]} /> Lesson {item.lesson_title}: {item.lessontitle} </Text>
                                <Text style ={styles.topic}> Topics </Text>
                                <View style = {styles.preview} >
                                    <Text style = {styles.previewText} > {item.read_preview} </Text>
                                </View>

                                <View style ={styles.main} >
                                    <TouchableOpacity onPress={ this.videoCount.bind(this, item.video_url) } style = {[styles.video]} >
                                        <Icon name="ondemand-video" size={29} color={'#fff'} style = {[styles.myIc]} />
                                        <Text style = {styles.text2}> Video </Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={this.data.bind(this, item.questions) } style = {[styles.test]} >
                                        <Icon name="assessment" size={30} color={'#fff'} style = {[styles.myIc]} />
                                        <Text style = {styles.text2}>Exercise </Text>
                                    </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                            
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex',
        width: 100+ '%'
    },
    topContent: {
        flex: 1,
        // backgroundColor: "red",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        elevation: 6
    },
    lessonBody: {
        flex: 3,
        // height: 70+'%',
         marginBottom: 10+'%',
        //  backgroundColor: 'green'
    },
    prog: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    logC: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // width: 70+'%',
        height: 20+'%',
        marginTop: 20
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
    preview: {
        padding: 8
    },
    previewText: {
        fontSize: 15,
        
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: 100 + '%',
        height: 100+ '%',
        alignItems: 'center'
    },
    text: {
        // backgroundColor: '#95a5a6',
        color: '#fff',
        padding: 5,
        fontSize: 20
    },

    text2: {
        // backgroundColor: '#95a5a6',
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center'
        
    },
    topic : {
        fontSize: 20,
        color: '#2c3e50'
    },
    lessons: {
        color: '#7f8c8d',
        lineHeight: 23,
        paddingLeft: 10,
    },
    flatCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: 90+ '%',
        margin: 10,
        borderRadius: 7

    },
    title: {
        textAlign: 'center',
        backgroundColor: '#8e44ad',
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
    },
    main: {
        backgroundColor: '#34495e',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    video: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#e74c3c',
        width: 40+ '%',
        height: 50,
        alignSelf: 'flex-end',
        margin:10 ,
        alignItems: 'center',
        borderRadius: 7
    },
    test: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
        width: 40+ '%',
        height: 50,
        margin: 10,
        borderRadius: 7

    }
})