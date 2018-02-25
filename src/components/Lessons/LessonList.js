import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Image ,TouchableOpacity, AsyncStorage } from 'react-native';
import * as french  from '../../db/french/A1/exercises';
import {db} from '../../db'
import { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


// import db from '../../db/${select}/A1'
// let select = ''
let totalCount = 0
export default class LessonList extends Component {

    constructor(){
        super();
        this.state = {
            totalVideo: ''
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        //  this.props.navigation.goBack(); 
         this.props.navigate('Lessons')
        return true;
    }
    // componentWillReceiveProps(props){
    //     this.calculateTotal()
    // }
    componentDidMount(){
        console.log(this.state.totalVideo)
    }
    
    
    calculateTotal(){
        
        let data = this.props.name
        let value = 0
        for(let i = 0; i < data.length; i++  ){
            console.log(i)
            value = i
        }
        totalCount = value
        return value
    }


    data(num){
        const language = this.props.language    
        const frenchExercises = [french.exercise1, french.exercise2]
        const {hausa, igbo, spanish, yoruba} = db;
        // console.log(hausa);
        if (language=='french') {
            frenchExercises.map((problems, loc) => {
                if (num == loc+1) {
                    
                    console.log(JSON.stringify(problems))
                    return(
                        this.props.navigate('Exercises', {exercise: problems, language:this.props.language, number: num} )
                        )
                }
            })
        }
        else if(language == 'Hausa'){
            console.log(hausa)
            let position = `exercise${num}`.toString()
            console.log(position)
            for(let native in hausa ){
            let str = hausa[native].toString();
                
                if(position == native ){
                    console.log(hausa[native])
                    return(
                        this.props.navigate('Exercises', {exercise: hausa[native], language:this.props.language, number: num} )
                        )
                }
            }
            
        }
        else if(language == 'Igbo'){
            console.log(igbo)
            let position = `exercise${num}`.toString()
            console.log(position)
            for(let native in igbo ){
            let str = igbo[native].toString();
                
                if(position == native ){
                    console.log(igbo[native])
                    return(
                        this.props.navigate('Exercises', {exercise: igbo[native], language:this.props.language, number: num} )
                        )
                }
            }
        }
        else if(language == 'Spanish'){
            console.log(spanish)
            let position = `exercise${num}`.toString()
            console.log(position)
            for(let native in spanish ){

                if(position == native ){
                    console.log(spanish[native])
                    return(
                        this.props.navigate('Exercises', {exercise: spanish[native], language:this.props.language, number: num} )
                        )
                }
            }
        }
        else if(language == 'yoruba'){
            console.log(yoruba)
            let position = `exercise${num}`.toString()
            console.log(position)
            for(let native in yoruba ){

                if(position == native ){
                    console.log(yoruba[native])
                    return(
                        this.props.navigate('Exercises', {exercise: yoruba[native], language:this.props.language, number: num} )
                        )
                }
            }
            
        }

    }

    async videoCount(video){
        try {
            const value = await AsyncStorage.getItem(this.props.language);
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
                    await AsyncStorage.setItem(this.props.language, `${per}`)
                }    
        console.log(totalCount)
            }
            else{
                let data = 1/totalCount
                await AsyncStorage.setItem(this.props.language, `${data}`)
              console.log('no token yet')
              // We have data!!
             
            }
          } catch (error) {
            // Error retrieving data
            console.log(error)
          }
        
      this.props.navigate('Screen', {video: video} )
    }


    render(){
        console.log({topics: this.props.name})
        this.calculateTotal()
        return(
            
            <View>
                
                <FlatList 
                    data = {this.props.name}
                    keyExtractor={(x,i)=> i}
                    renderItem = { ({item})=>
                    
                    <View style = {styles.flatCard} >
                        <Text style= {[styles.text, styles.title ]} > <Icon name="title" size={29} color={'#fff'} style = {[styles.myIc]} /> Lesson{item.lesson}: {item.lessontitle} </Text>
                        <Text style ={styles.topic}> Topics </Text>
                        <FlatList
                            data= {item.lessons}
                            onScrollBeginDrag={this.props.onScroll}
                            keyExtractor={(x,i)=> i}
                            renderItem = { ({item})=>
                                <View>
                                    <Text style={styles.lessons}>- {item}</Text>
                                </View>
                            }
                        />
                        <View style ={styles.main} >
                            <TouchableOpacity onPress={ this.videoCount.bind(this, item.video) } style = {[styles.video]} >
                                <Icon name="ondemand-video" size={29} color={'#fff'} style = {[styles.myIc]} />
                                <Text style = {styles.text2}> Video </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={this.data.bind(this, item.lesson,) } style = {[styles.test]} >
                                <Icon name="assessment" size={30} color={'#fff'} style = {[styles.myIc]} />
                                <Text style = {styles.text2}>Exercise </Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                    
                    }
                />
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