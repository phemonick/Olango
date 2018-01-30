import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';

export default class EmailConfirm extends Component{

    render(){
        return(
            <View style={styles.container}>
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
            <ImageBackground source ={require('../../images/bgImg.jpg')} style={styles.bgImg} >
                
            </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
      },
})