import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, AsyncStorage, Text,KeyboardAvoidingView, StatusBar } from 'react-native';
//  watches observables
import { observer } from 'mobx-react/native'
// when observable changes it re-renders
import { observable } from 'mobx'
//for asyncStorage, global to the app
const ACCESS_TOKEN = 'access_token';

@observer

class LoginForm extends Component {

    @observable email ;
    @observable password ;
    @observable error 

constructor(props){
    super(props)

    this.state = {
        email: '',
        password: '',
        error: '',
        that1: 'phe@gmail.com',
        that2: '123'
    }
}

signIn() {
    const { auth } = this.props.stores
    const { navigate } = this.props
    auth.signIn({email: this.state.email, password: this.state.password}).then((auth)=>{
        if(auth.message == "Success"){
            console.log({authmessage: auth.payload})
            this.props.navigation.navigate('Hom')
        }
    })
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
        await AsyncStorage.setItem('access_token', accesstoken)
        this.getToken('access_token')

    }
    catch(error){
        console.log('error : ' + err)
    }
}

async getToken(accesstoken){
    try {
     let value = await AsyncStorage.getItem('access_token')
        if (value !== null){
            console.log(value)
        }
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
    if (this.state.email==='' && this.state.password === '' ){
        this.setState({
            error: 'invalid input'
        })
        return(
            null
        )
    }

    try{
        console.log('password is'+ this.state.password)
        let responsez = await fetch('https://olango-api.herokuapp.com/auth/email/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                email: this.state.that1,
                password: this.state.that2,
               
            })
        })
        let resz = await responsez.json();
        consol.log({thadeus: resz})

    }catch(err){
        console.log({error: err})
    }
    try{
        console.log('password is'+ this.state.password)
        let response = await fetch('https://chatapiendpoint.herokuapp.com/api/v1/user/login', {
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
        let res = await response.json()
        console.log(res.message)
        let payload = JSON.stringify(res)
        console.log(payload)
        if(res.message =='Failed.'){
            console.log(res.message)
            this.setState({
                error: res.error
            })
        }
            
       else if(res.message == 'Success'){
            this.setState({
                error: ''
            })
            try {
                
                await AsyncStorage.setItem('@MySuperStore',payload).then((val)=>{
                    console.log({"stored item error":val})
                })
                
                
              } catch (error) {
                console.log('err', error)
              }
              this.props.navigate('Home')     
        
        }
    }
    catch(err){
        // this.removeToken()
        console.log('There has been a problem with your fetch operation: ' + err);
        this.setState({error: "poor internet connection"})  
        throw err
        
            
        

    }
}

    render() {
        const { auth } = this.props.stores
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior='position' style = {styles.container} >
                <StatusBar barStyle = 'light-content' />
                <TextInput 
                    onChangeText = {this.emailChange.bind(this) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    keyboardType = 'email-address'
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
                 <TouchableOpacity onPress={this.signIn.bind(this)} style = {styles.buttonContainer} >
                    <Text style = {styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
                <Text style = {styles.error}> {auth.error} </Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')} style = {styles.signUp} >
                   <Text style = {styles.bottomText}> Don't have an account? SIGN UP </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.signUp} onPress={()=> this.props.navigation.navigate('Hom')} > 
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