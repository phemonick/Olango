import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text } from 'native-base'
class HomeCard extends Component {

    render(){
        return(
            <Container>
                <Content style = {styles.cardContainer}>
                    <Card style = {styles.card} >
                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "french"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.french} >    
                            <Text style = {styles.cardText} > French </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "chinese"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.english}>
                            <Text style = {styles.cardText} > Chinese </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "yoruba"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.deutch}>
                            <Text style = {styles.cardText} > Yoruba </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "Igbo"} ) } style = {styles.cardItem}>   
                        <CardItem style = {styles.igbo}>
                            <Text style = {styles.cardText} > Igbo </Text>
                        </CardItem >
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "Hausa"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.yoruba}>
                            <Text style = {styles.cardText} > Hausa </Text>
                        </CardItem>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigate('Lessons', {name: "Spanish"} ) } style = {styles.cardItem}>
                        <CardItem style = {styles.spanish}>
                            <Text style = {styles.cardText} > Spanish </Text>
                        </CardItem>
                        </TouchableOpacity>

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
