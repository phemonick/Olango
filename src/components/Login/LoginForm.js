import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container} >
                <StatusBar barStyle = 'light-content' />
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='username'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onSubmitEditing = {() => this.passwordInput.focus()}
                 />
                 <TextInput 
                 placeholder ='password'  
                 underlineColorAndroid = 'transparent'          
                 returnKeyType = 'go'
                 secureTextEntry
                 style = {styles.input}
                 ref = {(input) => this.passwordInput = input}
                 />
                 <TouchableOpacity style = {styles.buttonContainer} >
                    <Text style = {styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.signUp} >
                   <Text style = {styles.bottomText}> Don't have an account? SIGN UP </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.signUp}> 
                   <Text style = {styles.bottomText} > Forgot your password </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default LoginForm;

const styles = StyleSheet.create({
    container: {

    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 15,
        height: 40,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 6,
        paddingHorizontal: 20
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        borderRadius: 6,
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signUp: {
        margin: 10,
        alignItems: 'center'
    },
    bottomText: {
        color: '#fff',
    }
})