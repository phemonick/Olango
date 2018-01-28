import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PayForm from './PayForm'

export default class Pay extends Component {

    render(){
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation.state.key)
        return(
            <View style = {styles.container}>
                <View style ={styles.content} >  
                    <View style= {styles.logoContainer}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                    </View>
                    <View>
                        <PayForm />
                    </View>
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
        display: 'flex',
    },
    logoContainer: {
        width: 100 + '%',
        alignSelf: 'flex-start'
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
    learn: {
        color: '#fff',
        textAlign: 'center'
    }
}) 