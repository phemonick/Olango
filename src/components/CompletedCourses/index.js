import React, { Component } from 'react';
import { inject } from 'mobx-react'
import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity,ToastAndroid, Image, ProgressBarAndroid, StatusBar, Dimensions } from 'react-native';
import Completed from './completed';
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import ProgressBarClassic from 'react-native-progress-bar-classic';
// import ProgressBarClassic from 'react-native-horizontal-progress-bar'
import * as Progress from 'react-native-progress';
 
let {height, width} = Dimensions.get('window');
@inject("stores")
class CoursesCompleted extends Component {

    constructor(){
        super();
        this.state = {
            avatarSource: ''
        }
       
    }

    componentWillMount(){
        
        this.getEM()
    }

   async componentDidMount(){
        console.log({storeesToken: this.props.stores.config.Token})
        await this.getImg()

    }
    async getImg(){
        await AsyncStorage.getItem('avatarSource').then((img)=>{
            let value = JSON.parse(img)
            console.log('value in setState', value)
            if(value !== null){
                this.setState({
                    avatarSource: value
                })
            }
        })
    }
    async changeImg(){
        let options = {
            title: 'Select Avatar',
            // customButtons: [
            //   {name: 'fb', title: 'Choose Photo from Facebook'},
            // ],
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
        ImagePicker.showImagePicker(options, async (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
              ToastAndroid.show(
                'Image has been selected',
                ToastAndroid.SHORT,
              );
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
              source = JSON.stringify(source)
              console.log(source)
              await AsyncStorage.setItem('avatarSource',source).then((val)=>{
                console.log({"stored item error":val})
            })
           let img = await AsyncStorage.getItem('avatarSource')
           console.log('image selected', img)
          
              this.setState({
                avatarSource: source
              });
              await this.getImg();
            }
          });
    }
    userProfile () {
        if(this.state.avatarSource == "") {
            return (
                <Icon name="perm-identity" size={100} color={'#00BCD4'}  />
            )
        }
        else {
            return (
                <Image style={styles.logo3} source={this.state.avatarSource} />
            )
        }
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
                        <TouchableOpacity onPress={()=>navigate('AdminHome')} style= {styles.logoContainer}>
                            <Image style = {styles.logo2} source = {require('../../images/msg.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.dp} >
                        <TouchableOpacity onPress={this.changeImg.bind(this)} style = {styles.prof}>
                            {this.userProfile()}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.card} > 
                    <Text style = {styles.learn} > Completed Courses </Text>
                    <Completed {...this.props}/>
                </View>
            </View>

        )
    }
}
export default CoursesCompleted;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    dp: {
        flex: 4,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        elevation: 7,
        backgroundColor: '#34495e',
        flex: 1

    },
    prof: {
        height: 120,
        borderRadius: 60,
        width: 120,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo3: {
        height: 120,
        borderRadius: 60,
        width: 120,
        resizeMode: 'cover',
        
    },
    row: {
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: 100+ '%',
       
        justifyContent: 'space-between'
    },
    logoContainer: {
        marginTop: 10
    },
    ImglogoContainer: {
        width: '100%'
    },
    uploadAvatar: {
        backgroundColor: '#fff',
        width: '100%'
    },
    logo: {
        height: 40,
        width: 120,
        alignSelf: 'flex-start',
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
    arrowLogo: {
        width: 100,
        padding: 10,
        marginBottom:20,
        height: 40,
        
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
        
        width: 100,
        backgroundColor: '#fff',
        
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