import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Login extends Component{
    render(){
        return (
            <View style = {styles.container}>
                 <View style= {styles.arrowLogo}>
                    <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                </View>
                <View style= {styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    <Text style = {styles.logoText}>The global world of language</Text>
                </View>
                <View style = {styles.formContainer} ></View>
                <View></View>
            </View>

        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#34495e',
        padding: 10
    },
    arrowLogo: {
        width: 100,
        marginBottom:20,
        height: 30,
        
    },
    arrow: {
        width: 30,
        height: 20,
        padding: 10
    },
    logoContainer: {
        width:  100 + '%',
        alignItems: 'center'
    },
    logo: {
        width: 370,
        height: 100,
        justifyContent: 'center'
        
    },
    logoText: {
        width: 100 + '%',
        justifyContent: 'center'

    },
    formContainer: {

    }
});

