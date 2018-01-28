import React, { Component } from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

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
        setTimeout(()=>{
            // Add your logic for the transition
            console.log(this.state.component)
            this.props.navigation.navigate(this.state.component)
       }, 5000)
        
    }

    render(){
        return(
            <View style = {styles.container} >
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        width: 100+ '%',
        height: 100+ '%'
    }
})