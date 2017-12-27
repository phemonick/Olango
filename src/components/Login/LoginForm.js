import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, AsyncStorage, Text,KeyboardAvoidingView, StatusBar } from 'react-native';

//for asyncStorage, global to the app
const ACCESS_TOKEN = 'access_token';

class LoginForm extends Component {

constructor(){
    super()

    this.state = {
        email: '',
        password: '',
        error: ''
    }
}
emailChange(text){
    this.setState({
        email: text
    })
    console.log(this.state.email)

}
passwordChange(text){
    this.setState({
        password: text
    })
    console.log(this.state.password)

}
async storeToken(accesstoken){
    try {
        await AsyncStorage.setItem(ACCESS_TOKEN, accesstoken)

    }
    catch(error){
        console.log('error : ' + err)
    }
}

async getToken(accesstoken){
    try {
     const value = await AsyncStorage.getItem(ACCESS_TOKEN)
        // if (value !== null){
        //     console.log(value)
        // }
    }
    catch(error){
        console.log('error : ' + err)
    }
}

async removeToken(accesstoken){
    try {
     const value = await AsyncStorage.removeItem(ACCESS_TOKEN)
     this.getToken()
    }
    catch(error){
        console.log('error : ' + err)
    }
}

async onLoginPressed(){
    try{
        console.log('password is'+ this.state.password)
        let response = await fetch('https://olango-api.herokuapp.com/auth/email/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                email: this.state.email,
                password: this.state.password,
               
            })
        })
        let res = await response.text()
        console.log(res)
        if (res.status >=200 && response.status < 300){
            this.setState({error: ''});
            console.log(res)
            // this.storeToken(accesToken);
        } else {
            let error = res;
            console.log('There has been a problem with your fetch operation: ' + error);
            throw error;
        }      
    }
    catch(err){
        // this.removeToken()
        console.log('There has been a problem with your fetch operation: ' + err);
        throw err
        
        this.setState({error: err})      
        

    }
}

    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={70} behavior='position' style = {styles.container} >
                <StatusBar barStyle = 'light-content' />
                <TextInput 
                    onChangeText = {this.emailChange.bind(this) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Email'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                 <TextInput 
                 onChangeText = { this.passwordChange.bind(this) }
                 placeholder ='Password'  
                 autoCapitalize = 'none'
                 underlineColorAndroid = 'transparent'          
                 returnKeyType = 'go'
                 
                 secureTextEntry
                 style = {styles.input}

                 />
                 <TouchableOpacity onPress={this.onLoginPressed.bind(this)} style = {styles.buttonContainer} >
                    <Text style = {styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigate('SignUp')} style = {styles.signUp} >
                   <Text style = {styles.bottomText}> Don't have an account? SIGN UP </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.signUp} onPress={()=> this.props.navigate('Hom')} > 
                   <Text style = {styles.bottomText} > Forgot your password </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
export default LoginForm;

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
    signUp: {
        margin: 10,
        alignItems: 'center'
    },
    bottomText: {
        color: '#fff',
    }
})