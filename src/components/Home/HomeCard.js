import React, { Component } from 'react';
import { StyleSheet, Button, Animated, TouchableOpacity, AsyncStorage } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text } from 'native-base'
class HomeCard extends Component {

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
        const transform = [{translateX}, {translateY}, {scale}]
        
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Content style = {styles.cardContainer}>
                    <Card style = {styles.card} >
                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "french"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.french} >    
                           {/* //allows to add transforms */}
                            <Animated.Text style = {[styles.cardText, {opacity, transform}]}  > French </Animated.Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "chinese"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.english}>
                            <Text style = {styles.cardText} > Chinese </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "yoruba"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.deutch}>
                            <Text style = {styles.cardText} > Yoruba </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Igbo"} ) } style = {styles.cardItem}>   
                        <CardItem style = {styles.igbo}>
                            <Text style = {styles.cardText} > Igbo </Text>
                        </CardItem >
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Hausa"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.yoruba}>
                            <Text style = {styles.cardText} > Hausa </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigate('Lessons', {name: "Spanish"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.spanish}>
                            <Text style = {styles.cardText} > Spanish </Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.clearToken.bind(this)}>
                            <Text> Clear Token </Text>
                        </TouchableOpacity>
                        <Button title='click me' onPress={()=>this.animate()} />

                    </Card>
                </Content>
            </Container>
        )
    }
}

export default HomeCard;

const styles = StyleSheet.create({
    card: {
        width: 100+ '%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',

    },
    cardItem: {
        margin: 5,
        width: 40+ '%',
        flexGrow: 1,

    },
    cardText: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 20,
        color: '#fff'
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cardContainer: {
        margin: 20,
        marginTop: 0
    },
    french: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2ecc71'
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
