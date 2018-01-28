import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'
class Login extends Component{
    render(){
        const { navigate } = this.props.navigation;

        return (
            <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.content} >
                 <TouchableOpacity  style= {styles.arrowLogo}>
                    <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                </TouchableOpacity>
                <View style= {styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    <Text style = {styles.logoText}>The global world of language</Text>
                </View>
                <View style = {styles.formContainer} >
                    <LoginForm navigate = {navigate} />
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
        height: 40,
        
    },
    arrow: {
        width: 40,
        height: 30,
        padding: 10
    },
    logoContainer: {
        width: 100 + '%',
        alignSelf: 'flex-start',
        marginBottom: 20
    },
    logo: {
        width: 100+'%',
        height: 60,  
        resizeMode: 'contain'    
    },
    logoText: {
        color: '#3498db',
        fontSize: 15,
        marginTop: 5,
        opacity: 0.5,
        alignSelf: 'center'
        


    },
    formContainer: {
        margin: 20,
        marginBottom: 0,
        alignSelf: 'stretch',
        padding: 20,
    }
});

