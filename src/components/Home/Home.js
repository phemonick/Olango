import React, { Component } from 'react';
import { inject } from 'mobx-react'
import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity, Image, ProgressBarAndroid,Animated, StatusBar } from 'react-native';
import HomeCard from './HomeCard';
import Fab from '../Fab'
import FabDialog from '../FabDialog'
import Icon from 'react-native-vector-icons/MaterialIcons';

// import ProgressBarClassic from 'react-native-progress-bar-classic';
// import ProgressBarClassic from 'react-native-horizontal-progress-bar'
import * as Progress from 'react-native-progress';


@inject("stores")
class Home extends Component {

        state={
            french: '',
            spanish: ''
        }
    constructor(){
        super();
        this.animated = new Animated.Value(0);
    }
    alert(){
        Alert.alert(
    
            // This is Alert Dialog Title
            'Alert Dialog Title',
         
            // This is Alert Dialog Message. 
            'Alert Dialog Message',
            [
              // First Text Button in Alert Dialog.
              {text: 'Ask me later', onPress: () => console.log('Ask me later Button Clicked')},
         
              // Second Cancel Button in Alert Dialog.
              {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},
         
              // Third OK Button in Alert Dialog
              {text: 'OK', onPress: () => console.log('OK ButtonPressed')},
              
            ]
         
          )
         

}

    componentWillMount(){
        // console.log({storeesToken: this.props.stores.auth.authUser})
        this.getEM()
    }

    componentDidMount(){
        this.animate()
        this.seeProgress();
        console.log({storeesToken: this.props.stores.config.Token})

    }
    

   async seeProgress(){
        let languages = ['french','spanish']

        languages.map(async (data, loc)=>{
            const value = await AsyncStorage.getItem(`${data}`);
            console.log(`${data}: ${value}`)
            if (value !== null) {
                console.log('value is', value)
                switch(data){
                case 'french':
                    this.setState({
                        french: value
                    })
                    console.log('french not empty')
                    break;
                case 'spanish':
                    this.setState({
                        spanish: value
                    })
                    break;
                default: 
                    console.log('hello')
            }
            }
            else{
                this.setState({
                    data: 0
                })
            }

        })
        console.log(this.state)
        
    }
    animate(){
        //allows to happen every time clicked
        this.animated.setValue(0)
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 2000
        }).start();
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
        const translateX = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 1]
        })
        const transform = [{translateX}]
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
                        <TouchableOpacity onPress={()=>navigate('AdminHome')} style= {styles.logoContainer2}>
                            <Image style = {styles.logo2} source = {require('../../images/msg.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Animated.Text style = {[styles.prog, { transform}]} >Spanish {parseInt(this.state.spanish*100)+'%'} </Animated.Text>
                    <View style ={styles.space} >
                                <View style = {styles.bar} >
                                    <Progress.Bar 
                                        progress = {this.state.spanish} 
                                        height = {30}
                                        width = {200}
                                        color = {'#2ecc71'}
                                        
                                    /> 
                                </View>
                                <TouchableOpacity style={styles.progL} >
                                    <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                                </TouchableOpacity>
                            
                    </View>
                    {/* <View style = {styles.fab} >
                        <Fab onPress={()=>{alert('FaB')}} style={styles.fab} />
                        
                    </View> */}
                    <Animated.Text style = {[styles.prog, { transform}]} >French {parseInt(this.state.french*100)+'%'} </Animated.Text>
                    <View style ={styles.space} >
                                <View style = {styles.bar} >
                                    <Progress.Bar 
                                        progress = {this.state.french} 
                                        height = {30}
                                        width = {200}
                                        color = {'#2ecc71'}
                                        
                                    />
                                </View>
                                <TouchableOpacity style={styles.progL} >
                                    <Icon name="play-arrow" size={30} color={'#fff'} style = {[styles.myIc]} />
                                </TouchableOpacity>
                            
                    </View>
                    
                </View>
                {/* <FabDialog /> */}
                
                <View style = {styles.card} > 
                    <Animated.Text style = {[styles.learn, { transform}]}> Learn a Language </Animated.Text>
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
        elevation: 6,
        backgroundColor: '#34495e',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10

    },
    row: {
        // marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: 100+ '%',
        padding: 3,
        justifyContent: 'space-between'
    },
    arrowLogo: {
        flex: 1,
        width: 100,
       
        height: 40,
        
    },
    logoContainer: {
        flex: 4,
        alignItems: 'center'
    },
    logoContainer2: {
        flex: 1
    },
    logo: {
        height: 40,
        width: 120,
        resizeMode: 'contain'
       
    },
    logo2: {
        height: 30,
        width: 60,
        resizeMode: 'contain'
       
    },
    
    arrow: {
        width: 40,
        height: 30,
        padding: 10,
        resizeMode: 'contain'
    },
    card: {
        
        alignSelf: 'center',
        flex: 2,
        // backgroundColor: '#34475d'

    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16
        
    },
    
    space: {
        flexDirection: 'row',
        width: '100%',
       justifyContent: "center"
        
        
    },
    progT: {
        textAlign: 'center',
        color: '#fff'
    },
    progL: {
        backgroundColor: '#2ecc71',
        marginLeft: '1%',
        borderRadius: 4,
        // padding: 5
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