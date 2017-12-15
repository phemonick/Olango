import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker, KeyboardAvoidingView } from 'react-native'


class SignupForm extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
           sex: '',
           language: ''
        }
    }

    onRegister(){
        
    }

    render() {
        return(
            <KeyboardAvoidingView keyboardVerticalOffset={70} style = {styles.container} >
                <TextInput 
                    onChangeText = { (text)=> this.setState({name: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='First Name'
                    returnKeyType = 'next'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onSubmitEditing = {() => this.passwordInput.focus()}
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
                    onChangeText = { (text)=> this.setState({email: text}) }
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder ='Email'
                    keyboardType = 'email-address'
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
                <TouchableOpacity onPress={()=> this.props.navigate('Home')} style = {styles.register} >
                    <Text style = {styles.registerText}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.exist} >
                    <Text style = {styles.existText}> I already have an account<Text style={styles.signIn}> SIGN IN </Text> </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
export default SignupForm;

const styles = StyleSheet.create({
    container: {

    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 10,
        height: 40,
        color: '#fff',
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