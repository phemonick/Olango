import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import PayForm from './PayForm'
import PayStac from './Paystack'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Pay extends Component {

    render(){
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation.state.key)
        return(
            <View style = {styles.container}>
                    <StatusBar  backgroundColor="rgba(0,0,0,0)"
                        networkActivityIndicatorVisible={false}
                        translucent={true}
                        barStyle="light-content" />
                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    </View>
                    <View style= {styles.pay} >
                        <PayStac />
                    </View>
                    <View style = {styles.bottom} >
                        <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}> Goto Home </Text>
                        <TouchableOpacity onPress={()=>navigate('Hom')} >
                            
                            <Icon name="trending-flat" size={100} color={'#000'}  />
                        </TouchableOpacity>
                    </View>
                
            </View>

        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    logoContainer: {
        flex: 1,
        width: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 100+'%',
        height: 40,  
        resizeMode: 'contain',
        marginTop: 10
    },
    card: {
        height: 70+ '%',
        alignSelf: 'center',

    },
    pay: {
        flex: 6,
        backgroundColor: 'red'
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    learn: {
        color: '#fff',
        textAlign: 'center'
    }
}) 