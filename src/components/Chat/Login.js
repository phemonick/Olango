import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native';
import Voximplant from 'react-native-voximplant'

export default class ChatLogin extends Component {

    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    componentDidMount() {
        Voximplant.SDK.connect();
    }

    async onLoginPress() {
        this.setState({
            loading: true
        })
        const { email, password } = this.state;
        console.log(email, password)
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", email);
        const accnameValue = 'phemonick'
        const appnamevalue = 'olangoapp'
        const usernameValue = email.replace(/@[^@]+$/, "")
        console.log({usernameVal: usernameValue})
        const passwordValue = password

        Voximplant.SDK.login(
            usernameValue + "@" + '.' + accnameValue + '.voximplant.com', passwordValue
        )
        console.log('login done')
    }
    render(){
        return(
            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior='position' style = {styles.container} >
                <StatusBar barStyle = 'light-content' />
                <TextInput 
                    onChangeText = {(test) => this.setState({email: test}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    keyboardType = 'email-address'
                    placeholder ='Email'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                 <TextInput 
                 onChangeText = { (test) => this.setState({password: test}) }
                 placeholder ='Password'  
                 autoCapitalize = 'none'
                 underlineColorAndroid = 'transparent'          
                 returnKeyType = 'go'
                 
                 secureTextEntry
                 style = {styles.input}

                 />
                 <TouchableOpacity onPress={this.onLoginPress.bind(this)} style = {styles.buttonContainer} >
                    <Text style = {styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ChatRegister')} style = {styles.signUp} >
                   <Text style = {styles.bottomText}> Don't have an account? SIGN UP </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.signUp} onPress={()=> this.props.navigation.navigate('Hom')} > 
                   <Text style = {styles.bottomText} > Forgot your password </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 15,
        height: 50,
        textAlign: 'center',
        color: '#7f8c8d',
        fontSize: 20,
        borderRadius: 6,
        paddingHorizontal: 20
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    error: {
        color: '#e74c3c',
        textAlign: 'center'
    },
    signUp: {
        margin: 10,
        alignItems: 'center'
    },
    bottomText: {
        color: '#fff',
    }
})