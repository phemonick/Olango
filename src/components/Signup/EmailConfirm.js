import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EmailConfirm extends Component{

    render(){
        return(
            <View style={styles.container}>
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
                <View style={styles.top}>
                    <View style={styles.olangoL}>
                        <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        <Text style = {styles.logoT}> The global world of languages </Text>
                    </View>
                    <View style = {styles.circle} >
                        <Icon name="check-circle"  size={150} color={'#34495e'} style = {[styles.myIc]} />
                    </View>
                    <View style={styles.olangoLB}>
                        <Text style={styles.text1} > Congratulations </Text>
                        <Text style={styles.text2}> Your email has been confirmed </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.bottom}>
                    <Text style={styles.bottomT}> Start </Text>
                        
                        <Icon name="arrow-forward"  size={50} color={'green'} style = {[styles.myIc]} />
                </TouchableOpacity>
                


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        alignItems: 'center',
        // alignSelf: 'stretch',
        // width: null,
        justifyContent: 'center'
      },
      top: {
          flex: 17,
          justifyContent: 'space-around',
          alignItems: 'center',
      },
      circle: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 75
      },
      logoT: {
        color: '#3F51B5',
        textAlign: 'center',
        fontSize: 16
      },
      text1: {
        color: '#43A047',
        textAlign: 'center',
        fontSize: 16
      },
      text2: {
        color:'#fff',
        textAlign: 'center',
        fontSize: 16
      },
      bottom: {
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'flex-end',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '40%',
          padding: 20
      },
      logo: {
        height: 60,
        width: 200,
        resizeMode: 'contain'
       
    },
    bottomL: {
        alignContent: 'flex-end',
        backgroundColor: '#fff'
    },
    bottomT: {
        fontSize: 24,
        textAlign: 'center',
        color: '#43A047'
    }

})