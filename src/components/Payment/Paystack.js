import React, { Component } from 'react';
import {View, StyleSheet, WebView } from 'react-native'

export default class Paystac extends Component {

    render(){
        let html = `
            <p> hello am th ejzvjb </p>
        `
        return (
            <View style = {styles.container} >
                <WebView
                    ref={'webview'}
                    source={{uri: 'https://brents-url-olango.herokuapp.com/pay'}}
                    javaScriptEnabledAndroid={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})