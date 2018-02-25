import React, { Component } from 'react'
import { StyleSheet, View, Image,AsyncStorage, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class SignIn extends Component{
    
    constructor(){
        super()
        this.state = {
            valid: false
        }
    }


   async linkFace(){
    }

    async facebook(){
        console.log('facebook')
        try{
            let response = await fetch('https://brents-url-olango.herokuapp.com/api/v1/auth/facebook')
            let result = await response.json();
            console.log(result)
        }
        catch(err){
            console.log(err)
        }
    }

    goHome(){
        const { navigate } = this.props.navigation;
        if(this.state.valid){

            return (
                navigate('Hom')
            )
        }else{
            navigate('Login')
        }

    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
                

                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        <Text style = {styles.logoText}>The global world of language</Text>
                    </View>

                    
                    <View style = {styles.getStarted} >
                            <TouchableOpacity onPress = {()=>navigate('SignUp')} style = {styles.createAccount}>
                                <Text style = {styles.media} > Create Account </Text>
                            </TouchableOpacity>
                            <View style={{margin: 10, width: '100%', alignSelf: 'center',justifyContent:'center', flex: 1,}} >
                                <Icon.Button name="facebook" backgroundColor='#3b5998'  style = {styles.facebook} onPress={this.facebook.bind(this)}>
                                    <Text style = {styles.media}>Login with Facebook</Text>
                                </Icon.Button>
                            </View>

                            <View style={{margin: 10, width: '100%', alignSelf: 'center', flex: 1,}} >
                                <Icon.Button name="google" backgroundColor='red'  style = {styles.google} onPress={this.facebook.bind(this)}>
                                    <Text style = {styles.media}>Login with Google</Text>
                                </Icon.Button>
                            </View>
                            
                            
                            
                        
                    </View>

                    <View style={styles.bottom} >
                        <Text style = {styles.media}> Already an OlangO member? </Text>
                        <TouchableOpacity onPress = {this.goHome.bind(this)} style = {styles.SignIn}>
                            <Text style = {styles.media2}> Sign In </Text>
                        </TouchableOpacity>
                    </View>

                
            </View>

        )
    }
}
export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        padding: 10,
    },
    content: {
        display: 'flex',
        
        height: 80 + '%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    logoContainer: {
        marginTop: 10,
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
    getStarted: {
        flex: 2,
        width: 70 + '%',
        alignSelf: 'center',
       
    },
    media: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },
    media2: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    createAccount: {
        backgroundColor: '#00BCD4',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10,
       
    },
    facebook: {
        backgroundColor: '#3b5998',
        // borderRadius: 6,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    google: {
        backgroundColor: '#F44336',
        borderRadius: 6,
        paddingVertical: 15,
        justifyContent: 'center',
        
    },
    bottom: {
        flex: 1
    },
    SignIn: {
        backgroundColor: '#2ecc71',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10,
        width: 90+ '%',
        alignSelf: 'center'
    }
});

