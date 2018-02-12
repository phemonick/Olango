import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Voximplant from 'react-native-voximplant';
import { StackNavigator } from 'react-navigation'
import Login from './Login'

DeviceEventEmitter.addListener('connectionSuccessful', () =>
    {console.log("connection sucesssful")
    _this.setState({
        page: 'Login'
    })}
);

DeviceEventEmitter.addListener("LoginSuccessful", () => {
    console.log('Login successsful')
} );
DeviceEventEmitter.addListener("LoginFailed", () => {
    console.log('login faileded');
} )

export default class LoginPage extends Component {

    constructor(){
        super();
        Voximplant.SDK.closeConnection();
        this,this.state = {
            page: 'connection',
            emailA: false,
            username: '',
            password: '',
            email: ''
        };
    }

    async componentDidMount(){
        _this = this;
        AsyncStorage.getItem("email").then(item => {
            if (item){
                this.setState({
                    emailA: true
                })
            }
        })
        Voximplant.SDK.connect();
    }

    async Voximplant() {
        const accnameValue  = "testing"
        const appNameValue = "testing"
        const email = await AsyncStorage.getItem("email");
        const usernameValue = email.replace(/@[^@]+$/, "")
        const passwordValue = await AsyncStorage.getItem("password")
        console.log(email, passwordValue)
        Voximplant.SDK.login(
            username + "@" + '.' + accnameValue + '.voximplant.com', passwordValue
        )
    }

    render(){
        if ( !this.state.emailA) {
            return (
                <View >
                    <Login {...this.props}/>
                </View>
            )
        }
        if (this.state.page == "login" ) {
            this.Voximplant()
        }
        return(
            <View>
                <Text> LOgin page </Text>
            </View>
        )
    }
}

style = StyleSheet.create({
    container: {
        flex: 1
    }
})
