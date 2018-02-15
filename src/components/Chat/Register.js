import React, { Component } from 'react';
import { View, Text, StyleSheet,AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import Voximplant from 'react-native-voximplant'
export default class ChatRegister extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            loading: false
        }
    }

    componentDidMount() {
        Voximplant.SDK.connect()
    }
    async onRegisterPress() {
        this.setState({
            loading: true
        })
        const { email, password, name } = this.state;
        console.log(email, password, name)
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("name", name)
        await AsyncStorage.setItem('password', password)
        
        const vmail = 'phemy.smith@gmail.com';
        const vpassword = 'olangoapi'
        //logon to ur account
        const responseM = await fetch(
            'https://api.voximplant.com/platform_api/Logon/?account_email=' + vmail + 
            '&account_password=' + vpassword
        );
        const jsonM = await responseM.json();
        const api_key = jsonM.api_key;
        const account_id = JSON.stringify(jsonM.account_id);
        await AsyncStorage.setItem('API', api_key);
        await AsyncStorage.setItem('ACC_ID', account_id);
        console.log({responseInM: jsonM})
        console.log(api_key, account_id)


        // const appName = 'olangoapp'
        // const responeA = await fetch(
        //     "https://api.voximplant.com/platform_api/AddApplication/?account_id=" + account_id +
        //     "&api_key=" + api_key + "&application_name=" + appName
        // )
        // const jsonA = await responeA.json();
        // const application_id = JSON.stringify(jsonA.application_id)
        // await AsyncStorage.setItem("application_id", application_id);
        // console.log("appId ", application_id)


        const usernameValue = email.replace(/@[^@]+$/, '');
        const response = await fetch(
            "https://api.voximplant.com/platform_api/AddUser/?account_id=" +
            account_id +
            "&api_key" + 
            api_key +
            "&user_name" +
            usernameValue +
            "&user_display_name" +
            name +
            "&user_password" +
            password
        )
        const json = await response.json();
        const user_id = JSON.stringify(json.user_id);
        await AsyncStorage.setItem("user_id", user_id);

        const responeB = await fetch(
            "https://api.voximplant.com/platform_api/BindUser/?account_id="+
            account_id +
            "&api_key" +
            api_key +
            "&user_id" +
            user_id +
            "&application_id=all"
        );
        const jsonB = await responseB.json();
        const result = JSON.stringify(jsonB.result);
        console.log({result: result})




        const accnameValue = 'phemonick';
        const appnameValue = 'olangoapp';
        const passwordValue = password

        Voximplant.SDK.login(
            usernameValue + "@" +
            appnameValue + "." +
            accnameValue + ".voximplant.com",
            passwordValue
        )
        this.setState({loading: false})
        //navigate
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.top}>
                    <Text> Register </Text>
                </View>
                <View style = {styles.middle}>
                    <View style = {styles.middleContent} >
                        <Text style = {styles.signUpT} > Sign Up </Text>
                        <TextInput
                            onChangeText = { (text)=> this.setState({name: text}) }
                            style = {styles.textIn}
                            underlineColorAndroid = 'transparent'
                            placeholder ='First Name'
                            ref = {input => (this.name = input ) } 
                            onSubmitEditing = {() => this.emailInput.focus() }
                            returnKeyType = 'next'
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                        />
                        <TextInput
                            onChangeText = { (text)=> this.setState({email: text}) }
                            style = {styles.textIn}
                            underlineColorAndroid = 'transparent'
                            placeholder ='Email'
                            ref = {input => (this.emailInput = input ) }
                            onSubmitEditing = {() => this.passwordInput.focus() }
                            returnKeyType = 'next'
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                        />
                        <TextInput
                            onChangeText = { (text)=> this.setState({password: text}) }
                            style = {styles.textIn}
                            underlineColorAndroid = 'transparent'
                            placeholder ='Password'
                            ref = {input => (this.passwordInput = input ) }
                            onSubmitEditing = {() => this.usernameInput.focus() }
                            returnKeyType = 'next'
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                        />
                        <TextInput
                            onChangeText = { (text)=> this.setState({username: text}) }
                            style = {styles.textIn}
                            underlineColorAndroid = 'transparent'
                            placeholder ='Username'
                            ref = {input => (this.usernameInput = input ) }
                            
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                        />
                        <TouchableOpacity onPress={this.onRegisterPress.bind(this)} style = {styles.reg} >
                            <Text> Register </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style = {styles.bottom}>
                    <Text> Hello </Text>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'green'
    },
    top: {
        backgroundColor: 'red',
        flex: 1
    },
    middle: {
        backgroundColor: 'yellow',
        flex: 3
    },
        middleContent: {
            padding: 20,
            alignItems: 'center'
        },
            signUpT:{
                fontSize: 20
            },
            textIn: {
                width: '80%',
                borderWidth: 1,
                marginBottom: '2%',

            },
            reg: {
                width: '100%',
                backgroundColor: 'green',
                padding: '4%',
                alignItems: 'center'
            },
    bottom: {
        backgroundColor: 'blue',
        flex: 1
    }
})