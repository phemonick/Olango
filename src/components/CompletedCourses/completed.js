import React, { Component } from 'react';
import { StyleSheet, View, Button, Animated, TouchableOpacity, AsyncStorage, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text } from 'native-base'
import * as Progress from 'react-native-progress';

class Completed extends Component {

    constructor(){
        super();
        this.animated = new Animated.Value(0);
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
    animate(){
        //allows to happen every time clicked
        this.animated.setValue(0)
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render(){
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
                    
                    <Text style = {styles.progT} > spanish 50% </Text>
                    <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style = {styles.progT} > Igbo 50% </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
                            </TouchableOpacity>
                        </View>
                    <Text style = {styles.progT} > chinese 50% </Text>
                    <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style = {styles.progT} > French 50% </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style = {styles.progT} > Hausa 50% </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View> 
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style = {styles.progT} > China 50% </Text>
                        <View style = {styles.progress} >
                            <View style = {styles.bar} >
                                <Progress.Bar 
                                    progress = {0.5} 
                                    height = {30}
                                    width = {200}
                                    color = {'#2ecc71'}
                                    
                                />
                            </View>
                            <TouchableOpacity style={styles.progL} >
                                <Image style = {styles.arrow} source = {require('../../images/progress.png')} />
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
        marginLeft: '5%',
        borderRadius: 4,
        padding: 5
    },
    arrow: {
        width: 40,
        height: 30,
        padding: 10,
        resizeMode: 'contain'
    },
    
})
