import React, { Component } from 'react'
import { StyleSheet, View, Image, Text,TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import LoginForm from './LoginForm'


class ForgotPassword extends Component{
    state={
        email: ''
    }
   async send(){
       
    try{
        if(this.state.email == ''){
            return 
        }
        
        this.loading = true
        let responseB = await fetch('https://brents-url-olango.herokuapp.com/forgotpassword', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                email: this.state.email
               
            })
        })
        let resB = await responseB.json();
        console.log('response is ', resB)
        ToastAndroid.showWithGravity(
            'Check your mail',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
    }catch(err){
        ToastAndroid.showWithGravity(
            'Email does not Exist',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        console.log('error', err)
    }
    }

    render(){
        const { navigate } = this.props.navigation;
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
                            <TextInput 
                                onChangeText = { (email)=>this.setState({email: email}) }
                                placeholder ='input email'  
                                autoCapitalize = 'none'
                                underlineColorAndroid = 'transparent'              
                                style = {styles.input}

                        />
                        <TouchableOpacity onPress={this.send.bind(this)} style = {styles.buttonContainer} >
                            <Text style = {styles.buttonText} > SEND </Text>
                        </TouchableOpacity>
                    </View>
            {/* </View> */}
            </KeyboardAvoidingView>

        )
    }
}
export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        padding: 10,
        
        
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
        flex: 15,
        // backgroundColor: '#fff',
        marginBottom: 0,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 15,
        height: 60,
        textAlign: 'center',
        color: '#7f8c8d',
        fontSize: 20,
        borderRadius: 6,
        paddingHorizontal: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        borderRadius: 6,
        height: 60,
        paddingVertical: 15,
        marginTop: 10
    },
});

