import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'
class Login extends Component{
    render(){
        return (
            <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.content} >
                 <View style= {styles.arrowLogo}>
                    <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                </View>
                <View style= {styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    <Text style = {styles.logoText}>The global world of language</Text>
                </View>
                <View style = {styles.formContainer} >
                    <LoginForm />
                </View>
            </View>
            </KeyboardAvoidingView>

        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        padding: 10
    },
    content: {
        
    },
    arrowLogo: {
        width: 100,
        padding: 10,
        marginBottom:20,
        height: 20,
        
    },
    arrow: {
        width: 30,
        height: 20,
        padding: 10
    },
    logoContainer: {
        width:  300,
        height: 150,
        alignItems: 'center',
        margin: 10
    },
    logo: {
        width: 370,
        height: 100,
       
        
    },
    logoText: {
        color: '#3498db',
        fontSize: 20,
        marginTop: 5,
        opacity: 0.5


    },
    formContainer: {
        margin: 20,
        marginBottom: 0,
        alignSelf: 'stretch',
        padding: 20,
    }
});

