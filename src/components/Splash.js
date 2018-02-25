import React, { Component } from 'react';
import {View, StyleSheet, AsyncStorage, Animated, Image,StatusBar, ActivityIndicator, Text} from 'react-native';
import { inject } from 'mobx-react'

@inject("stores")
export default class Splash extends Component {

    state={
        component: ''
    }
    constructor(props){
        super(props);
        this.animated = new Animated.Value(0);
        
    }
    componentWillMount(){
        console.log('started')
        this.checkToken();
    }

   async checkToken(){
    
        try {
            
            const value = await AsyncStorage.getItem('@MySuperStore')
            const response = await value
            console.log(response+"in check token")
            if (value !== null){
                // We have data!!
                console.log(value);
                this.setState({
                    component: 'Draw'
                })
              }
              // We have data!!
            //   this.props.navigation.navigate('SignIn')
            
            else{
                console.log('no token yet')
                this.setState({
                    component: 'SignIn'
                })
            }
          } catch (error) {
              console.log(error)
            // Error retrieving data
          }
    }

    componentDidMount(){
        this.animate()
        this.checkToken();
        const {stores, navigation } = this.props;
        setTimeout(()=>{
            // Add your logic for the transition
            console.log(this.state.component)
            navigation.navigate(this.state.component)
       }, stores.config.SplashTime)
        
    }

    animate(){
        //allows to happen every time clicked
        this.animated.setValue(0)
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render(){
        const opacity = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        const translateX = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 1]
        })
        const translateY = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 1]
        })
        const scale = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 1]
        })
        const transform = [{scale}]
        const { stores } = this.props
        return(
            <View style = {styles.container} >
                {/* <Image source = {stores.config.SplashImg}  style = {styles.Img} /> */}
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <Animated.Text style = {[styles.txt, {opacity, transform}]} > Welcome to Olango </Animated.Text>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
        // width: 100+ '%',
        // height: 100+ '%'
    },
    img: {
        flex: 1,
        width: null,
        height: null
    },
    txt: {
        color: '#fff',
        fontSize: 30
    }
})