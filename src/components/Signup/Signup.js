import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';

import SignupForm from './SignupForm'

class Signup extends Component{

    constructor(){
        super()
        this.state = {
            filePath: ''
        }
    }

    pickFIle(){
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.images()],
          },(error,res) => {
            // Android
            if(error){
                console.log(error)
                ToastAndroid.show(
                    'Image error',
                    ToastAndroid.SHORT,
                    
                  );
                return null
            }
            ToastAndroid.show(
                'Image has been selected',
                ToastAndroid.SHORT,
              );
              console.log({imagePath: res})
              const split = res.uri.split('/');

              RNFetchBlob.fetch('GET', 'file://' + res.uri + res.fileName, {
                        
                    })
                    // when response status code is 200
                    .then((res) => {
                        // the conversion is done in native code
                        let base64Str = res.base64()
                        // the following conversions are done in js, it's SYNC
                        let text = res.text()
                        let json = res.json()

                    })
                    // Status code is not 200
                    .catch((errorMessage, statusCode) => {
                        // error handling
                        console.log({errorMessag: errorMessage})
                    })

            const name = split.pop();
            const inbox = split.pop();
              this.setState({
                choosen: true,
                filePath: res.uri
            })
              
            console.log(
               res.uri,
               res.type, // mime type
               res.fileName,
               res.fileSize
            );
            console.log({split: split, name: name, inbox: inbox})
          });
     
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={-40} behavior='position' style = {styles.container}>
                <View style = {styles.content} >
                    <View style = {styles.up}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.navigate('SignIn')} style= {styles.arrowLogo}>
                            <Image style = {styles.arrow} source = {require('../../images/arrow.png')} />
                        </TouchableOpacity>
                        <View style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../images/olango.png')} />
                            <Text style = {styles.logoText}>The global world of languages</Text>
                        </View>
                    </View>
                    <View style = {styles.formContainer} >
                        <TouchableOpacity onPress={this.pickFIle.bind(this)} >
                            <Image style = {styles.camera} source = {require('../../images/camera.png')} />
                        </TouchableOpacity>
                        <SignupForm navigate = {navigate} />
                    </View>
                </View>
            </KeyboardAvoidingView>

        )
    }
}
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        justifyContent: 'space-between'
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    up: {
        width: 100+ '%'
    },
    arrowLogo: {
        width: 50,
        alignSelf: 'flex-start',
        padding: 20,
        marginBottom:10,
        height: 20,
        
    },
    arrow: {
        width: 40,
        height: 20,
        padding: 10
    },
    logoContainer: {
        width: 100 + '%',
        alignSelf: 'flex-start'
    },
    logo: {
        width: 100+'%',
        height: 50,  
        resizeMode: 'contain'    
    },
    logoText: {
        color: '#3498db',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
        opacity: 0.5,
        marginBottom: 0
    },
    camera: {
        width: 70,
        height: 70,
        alignSelf: 'center',
    },
    formContainer: {
        margin: 20,
        marginTop: 0,
        alignSelf: 'stretch',
        padding: 20,
    }
});

