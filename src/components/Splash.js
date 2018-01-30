import React, { Component } from 'react';
import {View, StyleSheet, AsyncStorage, Image} from 'react-native';
import { inject } from 'mobx-react'

@inject("stores")
export default class Splash extends Component {

    constructor(props){
        super(props);
        this.state={
            component: ''
        }
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
        this.checkToken();
        const {stores, navigation } = this.props;
        setTimeout(()=>{
            // Add your logic for the transition
            console.log(this.state.component)
            navigation.navigate(this.state.component)
       }, stores.config.SplashTime)
        
    }

    render(){
        const { stores } = this.props
        return(
            <View style = {styles.container} >
                <Image source = {stores.config.SplashImg}  style = {styles.Img} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: '#34495e',
        // width: 100+ '%',
        // height: 100+ '%'
    },
    img: {
        flex: 1,
        width: null,
        height: null
    }
})