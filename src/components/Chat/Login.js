import React, { Component } from 'react'
import { View, AsyncStorage, Text } from 'react-native';
import Voximplant from 'react-native-voximplant'

export default class ChatLogin extends Component {

    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    componentDidMount() {
        Voximplant.SDK.connect();
    }

    async onLoginPress() {
        this.setState({
            loading: true
        })
        const { email, password } = this.state;
        console.log(email, password)
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", email);
        const accnameValue = 'testing'
        const appnamevalue = 'testing'
        const usernameValue = email.replace(/@[^@]+$/, "")
        console.log(usernameValue)
        const passwordValue = password

        Voximplant.SDK.login(
            username + "@" + '.' + accnameValue + '.voximplant.com', passwordValue
        )
        console.log('login done')
    }
    render(){
        return(
            <View>
                <Text>
                    login here
                </Text>
            </View>
        )
    }
}