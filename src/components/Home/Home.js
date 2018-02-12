import React, { Component } from 'react';
import { inject } from 'mobx-react'
import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity, Image, ProgressBarAndroid, StatusBar } from 'react-native';
import HomeCard from './HomeCard';
// import ProgressBarClassic from 'react-native-progress-bar-classic';
// import ProgressBarClassic from 'react-native-horizontal-progress-bar'
import * as Progress from 'react-native-progress';

@inject("stores")
class Home extends Component {

    componentWillMount(){
        // console.log({storeesToken: this.props.stores.auth.authUser})
        this.getEM()
    }

    componentDidMount(){
        console.log({storeesToken: this.props.stores.config.Token})

    }
    async getEM(){
        try {
            const value = await AsyncStorage.getItem('@MySuperStore');
            if (value !== null){
                let data = JSON.parse(value)
                console.log(JSON.parse(value));
                console.log(data.user);
            }
            else{
               
              console.log('no token yet')
              // We have data!!
              this.props.navigation.navigate('SignIn')
            }
          } catch (error) {
            // Error retrieving data
          }
    }

    render(){
        const {stores} = this.props
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation.state.key)
        return(
            <View style = {styles.container}>
                <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.top}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=>navigate('DrawerToggle')}  style= {styles.arrowLogo}>
                            <Image style = {styles.arrow} source = {require('../../images/icons-05.png')} />
                        </TouchableOpacity>
                        <View style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                        </View>
                        <TouchableOpacity style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../images/camera.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.progress} >
                    <View style ={styles.space} >
                        <Text style = {styles.prog} >spanish 30% </Text>
                        <Progress.Bar 
                            progress = {0.3} 
                            height = {30}
                            color = {'#2ecc71'}  
                        />
                    </View>
                    <View style ={styles.space} >
                    <Text style = {styles.prog} >French 50% </Text>
                    <Progress.Bar 
                        progress = {0.5} 
                        height = {30}
                        color = {'#2ecc71'}
                        
                    />
                    </View>
                    </View>
                </View>
                <View style = {styles.card} > 
                    <Text style = {styles.learn} > Learn a Language </Text>
                    <HomeCard {...this.props}/>
                </View>
            </View>

        )
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    
    top: {
        elevation: 7,
        backgroundColor: '#34495e',
        flex: 1

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: 100+ '%',
        justifyContent: 'space-between'
    },
    logoContainer: {
        
    },
    logo: {
        height: 50,
        width: 100,
        resizeMode: 'contain'
       
    },arrowLogo: {
        width: 100,
        padding: 10,
        marginBottom:20,
        height: 40,
        
    },
    arrow: {
        width: 40,
        height: 30,
        padding: 10,
        resizeMode: 'contain'
    },
    card: {
        marginTop: 10,
        alignSelf: 'center',
        flex: 2

    },
    space: {
        marginBottom: 10
    },
    progress: {
        
        // width: 100,
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    prog: {
        color: '#fff',
        textAlign: 'center'
    },
    learn: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
}) 