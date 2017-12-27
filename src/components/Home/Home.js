import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HomeCard from './HomeCard'
class Home extends Component {

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>
                <View style= {styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                </View>
                <View style = {styles.card} > 
                    <Text style = {styles.learn} > Learn a Language </Text>
                    <HomeCard navigate = {navigate}/>
                </View>
            </View>

        )
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex'
    },
    logoContainer: {
        width: 100 + '%',
        alignSelf: 'flex-start'
    },
    logo: {
        width: 100+'%',
        height: 40,  
        resizeMode: 'contain',
        marginTop: 10
    },
    card: {
        height: 70+ '%',
        alignSelf: 'center'

    },
    learn: {
        color: '#fff',
        textAlign: 'center'
    }
}) 