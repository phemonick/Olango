import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker, KeyboardAvoidingView } from 'react-native'


class SignupForm extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
           sex: '',
           language: '',
           errors: [],
        }
    }

  async onRegister(){
       try {
        let response = await fetch('https://olango-api.herokuapp.com/auth/email/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            })
        })
        let res = await response.text()
        console.log(res)
        if(res.status >=200 && res.status < 300) {
            console.log('res success is: '+ res)
        } else {
            let errors = res;
            throw errors;
        }
       }
       catch(err){
        console.log('catch errors :' + err)
       }
    }

    render() {
        return(
            <KeyboardAvoidingView  style = {styles.container} >
                <View style={styles.name}>
                <TextInput 
                    onChangeText = { (text)=> this.setState({name: text}) }
                    style = {styles.fandLast}
                    underlineColorAndroid = 'transparent'
                    placeholder ='First Name'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onSubmitEditing = {() => this.passwordInput.focus()}
                 />
                 <TextInput 
                    onChangeText = { (text)=> this.setState({name: text}) }
                    style = {styles.fandLast}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Last Name'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onSubmitEditing = {() => this.passwordInput.focus()}
                 />
                 </View>
                 <TextInput 
                    onChangeText = { (text)=> this.setState({email: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Email'
                    keyboardType = 'email-address'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                 <TextInput 
                    onChangeText = { (text)=> this.setState({password: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Password'
                    secureTextEntry
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                 <TextInput 
                    onChangeText = { (text)=> this.setState({password: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Confirm Password'
                    secureTextEntry
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                  
                <View style = {styles.pick}>
                 <Picker
                    selectedValue={this.state.sex}
                    mode= "dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
                    <Picker.Item label="sex" value="" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                </Picker>
                </View>

                <View style = {styles.pick}>
                <Picker
                    mode= "dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="language"  />
                    <Picker.Item label="French" value="French" />
                    <Picker.Item label="Spanish" value="Spanish" />
                </Picker>
                </View>
                {/* bind set context of the whole onPress to the whole component */}
                <TouchableOpacity onPress={this.onRegister.bind(this)} style = {styles.register} >
                    <Text style = {styles.registerText}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigate('Home')} style = {styles.exist} >
                    <Text style = {styles.existText}> I already have an account<Text style={styles.signIn}> SIGN IN </Text> </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
export default SignupForm;

const styles = StyleSheet.create({
    container: {
        width: 100 + '%'
    },
    name: {
        backgroundColor: 'rgba(255,255,255,1)',
        height: 40,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100 + '%',
        borderRadius: 6,
    },
    fname: {
        borderLeftWidth: 1
    },
    fandLast: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 10,
        width: 50+ '%',
        height: 40,
        color: '#7f8c8d',
        borderRadius: 6,
        paddingHorizontal: 20
    },

    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 10,
        height: 40,
        color: '#7f8c8d',
        borderRadius: 6,
        paddingHorizontal: 20
    },
    pick: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 10,
        height: 40,
        borderRadius: 6,
        paddingHorizontal: 20
    },
    register: {
        backgroundColor: '#2ecc71',
        borderRadius: 6,
        paddingVertical: 5
    },
    registerText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    signIn: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    exist: {
        marginTop: 10,
    },
    existText: {
        textAlign: 'center',
        color: '#bdc3c7'
    }
})