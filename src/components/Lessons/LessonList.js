import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
// import db from '../../db/${select}/A1'
// let select = ''
export default class LessonList extends Component {
    
 async data(num){
    const language = this.props.language
    let response = await import (`../../db/french/A1/exercise1`)
    let item = await response.exercises;
    console.log(item)
    return(
    this.props.navigate('Exercises', {exercise: item, language:this.props.language} )
    )
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

        fontSize: 15,
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
        backgroundColor: '#e74c3c',
        width: 30+ '%',
        height: 40,
        alignSelf: 'flex-end',
        margin:10 ,
        alignContent: 'flex-start'
    },
    test: {
        backgroundColor: '#2ecc71',
        width: 30+ '%',
        height: 30,
        margin: 10

    }
})