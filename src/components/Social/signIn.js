import React, { Component } from 'react'
import { StyleSheet, View, Image,AsyncStorage, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

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
                <View style = {styles.content} >

                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        <Text style = {styles.logoText}>The global world of language</Text>
                    </View>

                    <View>
                        <View style = {styles.getStarted} >
                            <TouchableOpacity onPress = {()=>navigate('SignUp')} style = {styles.createAccount}>
                                <Text style = {styles.media} > Create Account </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.facebook.bind(this)} style = {styles.facebook}>
                                <Text style = {styles.media}> Join with Facebook </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.google}>
                                <Text style = {styles.media}> Join with Google </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style = {styles.media}> Already an OlangO member? </Text>
                        <TouchableOpacity onPress = {this.goHome.bind(this)} style = {styles.SignIn}>
                            <Text style = {styles.media}> Sign In </Text>
                        </TouchableOpacity>
                    </View>

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
        width: 70 + '%',
        alignSelf: 'center',
    },
    media: {
        textAlign: 'center',
        color: '#fff'
    },
    createAccount: {
        backgroundColor: '#00BCD4',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10
    },
    facebook: {
        backgroundColor: '#3F51B5',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10
    },
    google: {
        backgroundColor: '#F44336',
        borderRadius: 6,
        paddingVertical: 15,
        marginTop: 10
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

