import React, { Component } from 'react';
import { StyleSheet, View, Button, Animated, TouchableOpacity, AsyncStorage, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text } from 'native-base'
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Completed extends Component {

    state = {
        french: '',
        spanish: 0,
        chinese: 0,
        igbo: 0,
        hausa: 0,
        yoruba: 0
    }
    constructor(){
        super();
        this.animated = new Animated.Value(0);
        
    }

    async componentDidMount(){
        let languages = ['french','spanish', 'chinese', 'yoruba', 'igbo', 'hausa']

        languages.map(async (data, loc)=>{
            const value = await AsyncStorage.getItem(`${data}`);
            console.log(`${data}: ${value}`)
            if (value !== null) {
                console.log('value is', value)
                switch(data){
                case 'french':
                    this.setState({
                        french: value
                    })
                    console.log('french not empty')
                    break;
                case 'spanish':
                    this.setState({
                        spanish: value
                    })
                    break;
                case 'igbo':
                    this.setState({
                        igbo: value
                    })
                    break;
                case 'yoruba':
                    this.setState({
                        yoruba: value
                    })
                    break;
                case 'hausa':
                    this.setState({
                        hausa: value
                    })
                    break;
                case 'chinese':
                    this.setState({
                        chinese: value
                    })
                    break;

                    default: 
                    console.log('hello')
            }
            }
            else{
                this.setState({
                    data: 0
                })
            }

        })
        console.log(this.state)
        
    }

    clearToken(){
        AsyncStorage.removeItem('@MySuperStore', (err, res)=>{
            if(err){

                console.log(err)
                throw err
            }
            console.log('Successful')
        })
    }
    travel(language){
        const {navigate} = this.props.navigation
        navigate('Lessons', {name: language})
         
    }
    

    animate(){
        //allows to happen every time clicked
        this.animated.setValue(0)
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render(){
        console.log(this.state)
        const opacity = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        const translateX = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 1]
        })
        const translateY = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 1]
        })
        const scale = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 1]
        })
        const transform = [{translateX}, {translateY}]
        
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container} >
                    
                    <Text style = {styles.progT} > spanish {parseInt(this.state.spanish*100)+'%'} </Text>
                    <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {this.state.spanish} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity onPress={this.travel.bind(this, "spanish")} style={styles.progL} >
                                <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                            </TouchableOpacity>
                        </View>
                        <Text style = {styles.progT} > Igbo {parseInt(this.state.igbo*100)+'%'} </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {this.state.igbo} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity onPress={this.travel.bind(this, "igbo")} style={styles.progL} >
                                <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                            </TouchableOpacity>
                        </View>
                    <Text style = {styles.progT} > chinese {parseInt(this.state.chinese*100)+'%'} </Text>
                    <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {this.state.chinese} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity onPress={this.travel.bind(this, "chinese")} style={styles.progL} >
                                <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style = {styles.progT} > French {parseInt(this.state.french*100)+'%'} </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {this.state.french} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity onPress={this.travel.bind(this, "french")} style={styles.progL} >
                                <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                            </TouchableOpacity>
                        </View>

                        <Text style = {styles.progT} > Hausa {parseInt(this.state.hausa*100)+'%'} </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {this.state.hausa} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View> 
                            <TouchableOpacity onPress={this.travel.bind(this, "hausa")} style={styles.progL} >
                               <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                            </TouchableOpacity>
                        </View>

                        
                        
               
            </View>
        )
    }
}

export default Completed;

const styles = StyleSheet.create({
    container: {
        width: 100+ '%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
       
        

    },
    position: {
        
        justifyContent: 'space-between'
    },
    progress: {
        flexDirection: 'row',
        width: '100%',
        
        
    },
    progT: {
        textAlign: 'center',
        color: '#fff'
    },
    progL: {
        backgroundColor: '#2ecc71',
        marginLeft: '1%',
        borderRadius: 4,
        // padding: 5
    },
    arrow: {
        width: 40,
        height: 30,
        padding: 10,
        resizeMode: 'contain'
    },
    
})
