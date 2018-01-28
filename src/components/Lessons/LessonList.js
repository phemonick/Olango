import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Image ,TouchableOpacity } from 'react-native';
import * as french  from '../../db/french/A1/exercises';
import {db} from '../../db'
import { BackHandler } from 'react-native';

// import db from '../../db/${select}/A1'
// let select = ''

export default class LessonList extends Component {

    constructor(){
        super();
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
    render(){
        
        return(
            
            <View>
                
                <FlatList 
                    data = {this.props.name}
                    keyExtractor={(x,i)=> i}
                    renderItem = { ({item})=>
                    
                    <View style = {styles.flatCard} >
                        <Text style= {[styles.text, styles.title ]} > Lesson{item.lesson}: {item.lessontitle} </Text>
                        <Text style ={styles.topic}> Topics </Text>
                        <FlatList
                            data= {item.lessons}
                            keyExtractor={(x,i)=> i}
                            renderItem = { ({item})=>
                                <View>
                                    <Text style={styles.lessons}>- {item}</Text>
                                </View>
                            }
                        />
                        <TouchableOpacity onPress={()=> this.props.navigate('Screen', {video: item.video} ) } style = {[styles.video]} >
                        {/* <Image style = {styles.logo} source = {require('../../images/video.png')} /> */}
                            <Text style = {styles.text2}>Watch Video </Text>
                        </TouchableOpacity>
                        {/* {this.data.bind(this, item.lesson)}  */}
                        {/* ()=> this.props.navigate('Exercises', {exercise: item} ) */}
                        <TouchableOpacity onPress={this.data.bind(this, item.lesson,) } style = {[styles.test]} >
                            <Text style = {styles.text2}>Take text </Text>
                        </TouchableOpacity>
                        
                        
                        
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
        color: '#3498db',
        padding: 5,
        fontSize: 15
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
        color: '#7f8c8d'
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
        textAlign: 'center'
    },
    video: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e74c3c',
        width: 40+ '%',
        height: 50,
        alignSelf: 'flex-end',
        margin:10 ,
        alignContent: 'flex-start'
    },
    test: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2ecc71',
        width: 40+ '%',
        height: 30,
        margin: 10

    }
})