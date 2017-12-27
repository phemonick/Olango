import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

class SignIn extends Component{

   async linkFace(){
    }
    render(){

        return (
            <View style = {styles.container}>
                <View style = {styles.content} >

                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        <Text style = {styles.logoText}>The global world of language</Text>
                    </View>

                    <View>
                        <View style = {styles.getStarted} >
                            <TouchableOpacity onPress = {this.linkFace} style = {styles.createAccount}>
                                <Text style = {styles.media} > Create Account </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.facebook}>
                                <Text style = {styles.media}> Join with Facebook </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.google}>
                                <Text style = {styles.media}> Join with Google </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style = {styles.media}> Already an OlangO member? </Text>
                        <TouchableOpacity style = {styles.SignIn}>
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

