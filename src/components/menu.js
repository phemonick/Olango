import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'

export default class Menu extends Component {
    constructor(){
        super()
        this.state= {
            name: '',
            token: ''
        }
    }
    componentWillMount(){
        this.getToken()
    }

    async getToken(){
        try {
            
            const value = await AsyncStorage.getItem('@MySuperStore')
            const response = await JSON.parse(value)
            console.log(response)
            if (value !== null){
                // We have data!!
                console.log(value);
                this.setState({
                    token: response.token
                })
                
            }
            else{
                console.log('no token yet')
                
            }
            }
        catch (error) {
              console.log(error)
            // Error retrieving data
          }
    }

   async testRoute(){
          await this.getToken();
        try{
            console.log({"state Token":this.state.token})
        
        let response = await fetch('https://chatapiendpoint.herokuapp.com/api/v1/chats', {
            headers: {
                'Authorization': this.state.token,
                'Accept': 'application/json',
                'content-Type': 'application/json',
            }
        })
        let res = await response.json()
        console.log(res);

        }catch(error){
            console.log(error)
        }
    }
    componentDidMount(){

    }
    async getName(){
        try {
            const value = await AsyncStorage.getItem('@MySuperStore');
            if (value !== null){
              // We have data!!
              let val = JSON.parse(value)
              this.setState({
                  name: val.firstname
              })
              console.log(JSON.parse(value));
            }
          } catch (error) {
            // Error retrieving data
          }
    }
    
    static navigationOptions = ((navigation) => {
        title: 'Side menu'
    })
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <TouchableOpacity>
                <Text style ={styles.pageTitle}> Menu </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.testRoute.bind(this)} >
                    <Text style ={styles.menus}> Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style  ={styles.menus} onPress= {()=> navigate('Hom')}> Language Catalog </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={styles.menus}> Completed Courses </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={styles.menus} onPress= {()=> navigate('Forum')}> Forum </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=> navigate('User')} >
                    <Text style ={styles.menus}> Chat </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=> navigate('Pay')} >
                    <Text style ={styles.menus}> Payment </Text>
                </TouchableOpacity>
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    pageTitle: {
        margin: 10,
        color: '#95a5a6', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    menus: {
        borderBottomWidth: 1,
        fontSize: 15,
        padding: 10,
        borderBottomColor: '#95a5a6'
    }
});