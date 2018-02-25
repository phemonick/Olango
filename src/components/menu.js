import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker'

export default class Menu extends Component {
    constructor(){
        super()
        this.state= {
            name: '',
            token: '',
            avatarSource: ''
        }
        this.getToken()
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
    async getImg(){
        await AsyncStorage.getItem('avatarSource').then((img)=>{
            let value = JSON.parse(img)
            console.log('value in setState', value)
            this.setState({
                avatarSource: value
            })
        })
    }
    async changeImg(){
        let options = {
            title: 'Select Image',
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
   async clearToken(){
        AsyncStorage.removeItem('@MySuperStore', (err, res)=>{
            if(err){

                console.log(err)
                throw err
            }
            console.log('Successful')
            this.props.navigation.navigate('SignIn')
        })
    }
    
    static navigationOptions = ((navigation) => {
        title: 'Side menu'
    })
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container} >
                <View style = {styles.dp} >
                    <TouchableOpacity onPress={this.changeImg.bind(this)} style = {styles.prof}>
                    {this.userProfile()}
                    </TouchableOpacity>
                    <Text style ={styles.pageTitle}> Welcome to Olango </Text>
                </View>
                
                {/* <TouchableOpacity style = {styles.touch} >
                <Text style ={styles.pageTitle}> Menu </Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style = {styles.touch} >
                    <Icon name="recent-actors" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus}> Profile </Text>
                </TouchableOpacity> */}
                <TouchableOpacity style = {styles.touch} >
                    <Icon name="home" size={29} style = {[styles.myIc]} />
                    <Text style  ={styles.menus} onPress= {()=> navigate('Hom')}> Language Catalog </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touch}>
                    <Icon name="store" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus} onPress= {()=> navigate('CompletedCourses')}> Completed Courses </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=> navigate('Forum')} style = {styles.touch}>
                    <Icon name="forum" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus} > Forum </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touch} onPress= {()=> navigate('AdminHome')} >
                    <Icon name="chat" size={29} style = {[styles.myIc]} />                              
                    <Text style ={styles.menus}> Chat </Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touch} onPress= {()=> navigate('Pay')} >
                    <Icon name="payment" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus}> Payment </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touch} onPress= {()=> navigate('Vid')} >
                    <Icon name="call" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus}> Call </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touch} onPress= {this.clearToken.bind(this)} >
                    <Icon name="settings-power" size={29} style = {[styles.myIc]} />
                    <Text style ={styles.menus}> Logout </Text>
                </TouchableOpacity>
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dp: {
        flex: 4,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    prof: {
        height: 150,
        borderRadius: 75,
        width: 150,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo3: {
        height: 150,
        borderRadius: 75,
        width: 150,
        resizeMode: 'cover',
        
    },
    pageTitle: {
        margin: 5,
        color: '#fff', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    menus: {
        
        
        fontSize: 15,
        padding: 10,
        
    },
    touch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#95a5a6'
    },
    myIc: {
        marginLeft: 20,
    }
});