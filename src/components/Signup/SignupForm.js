import React, { Component } from 'react';
import { Text, View, StyleSheet, ToastAndroid, TouchableOpacity, TextInput, Picker, KeyboardAvoidingView, ScrollView } from 'react-native'


class SignupForm extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
            Lname: '',
            password: '',
            confirmPassword: '',
           sex: '',
           language: '',
           errors: [],
        }
    }

  async onRegister(){
       try {
           if(this.state.password.length < 6 ) {
               let err = []
               err.push('password length too short');
               console.log(err)
               this.setState({
                   errors: err
               })
               ToastAndroid.showWithGravity(
                'password length too short',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
               return err
           }
        let response = await fetch('https://chatapis.herokuapp.com/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.name +" "+ this.state.Lname,
                lastname: this.state.Lname,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                sex: this.state.sex,
                lanuguage: this.state.language
            })
        })
        let res = await response.json()
        console.log(res)
        if(res.errors){
            console.log(res.errors)
            this.setState({
                errors: res.errors
            })
            return 
        }else {
            this.setState({
                errors: ''

            })
            
        }

        let responseB = await fetch('https://brents-url-olango.herokuapp.com/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: this.state.name,
                lastname: this.state.Lname,
                email: this.state.email,
                password: this.state.password,
                sex: this.state.sex,
                lanuguage: this.state.language
            })
        })
        let resB = await responseB.json();
        if(resB.message2 == 'error') {
            
        }
        console.log(resB)
        this.props.navigate('Login')
       }
       catch(err){
        this.setState({
            errors: 'check internet connection'
        })
       }
    }

    render() {
        
        return(
            
            <KeyboardAvoidingView  style = {styles.container} >
            <ScrollView>
                {this.state.errors.length == 0 ? (<Text> </Text>) :(<Text style ={ styles.err }> {this.state.errors[0].msg} </Text>) }
                
                <View style={styles.name}>
                <TextInput 
                    onChangeText = { (text)=> this.setState({name: text}) }
                    style = {styles.fandLast}
                    underlineColorAndroid = 'transparent'
                    placeholder ='First Name'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    ref = {name => (this.name = name ) }
                    onSubmitEditing={()=>this.LnameInput.focus()}
                    autoCorrect = {false}
                    
                 />
                 <TextInput 
                    onChangeText = { (text)=> this.setState({Lname: text}) }
                    style = {styles.fandLast}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Last Name'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    ref = {input => (this.LnameInput = input ) }
                    onSubmitEditing={()=>this.emailInput.focus()}
                    autoCorrect = {false}
                    
                 />
                 </View>
                 <TextInput 
                    onChangeText = { (text)=> this.setState({email: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Email'
                    keyboardType = 'email-address'
                    ref = {input => (this.emailInput = input ) }
                    onSubmitEditing={()=>this.passwordData.focus()}
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
                    ref = {input => (this.passwordData = input ) }
                    onSubmitEditing={()=>this.confF.focus()}
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                 <TextInput 
                    onChangeText = { (text)=> this.setState({confirmPassword: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='confirm Password'
                    secureTextEntry
                    ref = {input => (this.confF = input ) }
                    
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                 />
                  
                <View style = {styles.pick}>
                 <Picker
                    selectedValue={this.state.sex}
                    mode= "dropdown"
                    onValueChange={(itemValue, itemIndex) =>{ 
                        console.log(itemValue)
                        this.setState({sex: itemValue})
                        }}>
                    <Picker.Item label="sex" value="" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                </Picker>
                </View>

                <View style = {styles.pick}>
                <Picker
                    mode= "dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) =>{ 
                        console.log(itemValue)
                        this.setState({language: itemValue})
                        }}>
                    <Picker.Item label="language"  />
                    <Picker.Item label="French" value="French" />
                    <Picker.Item label="Spanish" value="Spanish" />
                </Picker>
                </View>
                {/* bind set context of the whole onPress to the whole component */}
                <TouchableOpacity onPress={this.onRegister.bind(this)} style = {styles.register} >
                    <Text style = {styles.registerText}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigate('Login')} style = {styles.exist} >
                    <Text style = {styles.existText}> I already have an account<Text style={styles.signIn}> SIGN IN </Text> </Text>
                </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
            
        )
    }
}
export default SignupForm;

const styles = StyleSheet.create({
    container: {
        width: 100 + '%'
    },
    err: {
        color: '#e74c3c',
        textAlign: 'center'
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