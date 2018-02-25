import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'
import { inject } from 'mobx-react'

@inject("stores")
class Login extends Component{
    render(){
        const { navigate } = this.props.navigation;
        const {stores} = this.props
        return (
            <KeyboardAvoidingView style = {styles.container}>
            
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
            {/* <View style = {styles.content} > */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}  style= {styles.arrowLogo}>
                        <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                    </TouchableOpacity>
                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        <Text style = {styles.logoText}>The global world of language</Text>
                    </View>
                    <View style = {styles.formContainer} >
                        <LoginForm {...this.props} />
                    </View>
            {/* </View> */}
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
        paddingTop: 20,
        flex: 1,
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
        flex: 1,
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
        marginTop: 20,
        flex: 7,
        // backgroundColor: '#fff',
        marginBottom: 0,
        alignSelf: 'stretch',
        padding: 20,
    }
});

