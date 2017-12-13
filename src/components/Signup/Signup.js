import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import SignupForm from './SignupForm'

class Signup extends Component{
    render(){
        return (
            <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.content} >
                 <TouchableOpacity style= {styles.arrowLogo}>
                    <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                </TouchableOpacity>
                <View style= {styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    <Text style = {styles.logoText}>The global world of languages</Text>
                </View>
                <TouchableOpacity >
                    <Image style = {styles.camera} source = {require('../../images/camera.png')} />
                </TouchableOpacity>
                <View style = {styles.formContainer} >
                    <SignupForm />
                </View>
            </View>
            </KeyboardAvoidingView>

        )
    }
}
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    arrowLogo: {
        width: 50,
        alignSelf: 'flex-start',
        padding: 20,
        marginBottom:10,
        height: 40,
        
    },
    arrow: {
        width: 40,
        height: 20,
        padding: 10
    },
    logoContainer: {
        width: 100 + '%',
        alignSelf: 'flex-start'
    },
    logo: {
        width: 100+'%',
        height: 50,  
        resizeMode: 'contain'    
    },
    logoText: {
        color: '#3498db',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
        opacity: 0.5,
        marginBottom: 10
    },
    camera: {
        width: 70,
        height: 70,
    },
    formContainer: {
        margin: 20,
        marginBottom: 0,
        alignSelf: 'stretch',
        padding: 20,
    }
});

