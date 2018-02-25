import React, { Component } from 'react';
import { StyleSheet, Button, Animated, TouchableOpacity, AsyncStorage, CheckBox } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text } from 'native-base'
class HomeCard extends Component {

    constructor(){
        super();
        this.animated = new Animated.Value(0);
        this.state = {
            check: false
        }
        
    }

    componentDidMount(){
        this.animate()
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
        Animated.spring(this.animated, {
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
            outputRange: [30, 1]
        })
        const transform = [{scale}]
        
        const {navigate} = this.props.navigation
        return(
            
                    <Card style = {styles.card} >
                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "french"} ) } style = {[styles.cardItem, styles.french]}>
                            <CardItem style = {styles.french} >    
                            {/* //allows to add transforms */}
                                
                                <Animated.Text style = {[styles.cardText, {opacity, transform}]}  > French </Animated.Text>
                            </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "chinese"} ) } style = {[styles.cardItem, styles.english]}>
                        <CardItem style = {styles.english}>
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]} > Chinese </Animated.Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "yoruba"} ) } style = {[styles.cardItem, styles.deutch]}>
                        <CardItem style = {styles.deutch}>
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]} > Yoruba </Animated.Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Igbo"} ) } style = {[styles.cardItem, styles.igbo]}>   
                        <CardItem style = {styles.igbo}>
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]} > Igbo </Animated.Text>
                        </CardItem >
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Hausa"} ) } style = {[styles.cardItem, styles.yoruba]}>
                        <CardItem style = {styles.yoruba}>
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]} > Hausa </Animated.Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Spanish"} ) } style = {[styles.cardItem, styles.spanish]}>
                        <CardItem style = {styles.spanish}>
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]} > Spanish </Animated.Text>
                        </CardItem>
                        </TouchableOpacity>
                        
                        {/* <Button title='click me' onPress={()=>this.animate()} /> */}

                    </Card>
               
        )
    }
}

export default HomeCard;

const styles = StyleSheet.create({
    cardContainer: {
        
    },
    card: {
        padding: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',

    },
    cardItem: {
        margin: 5,
        width: '40%',
        height: '30%',
        flexGrow: 1,
        alignItems: 'center',

    },
    cardText: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 24,
        color: '#fff'
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cardContainer: {
        margin: 20,
        marginTop: 0
    },
    check: {
        alignSelf: 'flex-start',
        alignContent: 'flex-start'
        
    },
    french: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2ecc71',
    },
    english: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f1c40f'
    },
    deutch: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#27ae60'
    },
    igbo: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#3498db'
    },
    yoruba: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e74c3c'
    },
    spanish: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#8e44ad'
    }
})
