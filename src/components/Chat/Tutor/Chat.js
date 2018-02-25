import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, BackHandler } from 'react-native';
import ChatBody from './ChatBody'
import ChatTest from './chatTest'
import Voice from './Transmit'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Chat extends Component{

    constructor(){
        super()
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        //  this.props.navigation.goBack();
         this.props.navigation.navigate('AdminHome')
        return true;
    }
    
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    render(){
        const { params } = this.props.navigation.state
        return(
            <View style ={styles.container} >
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.topH} > 
                    <Text style = {styles.txt} >{params.name} Admin</Text>
                    <View style = {styles.icons}>
                        <TouchableOpacity style = {{marginRight: 10}} >
                            <Icon name="call" color={'#fff'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="video-call" color={'#fff'} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                    <ChatBody {...this.props} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue'
    },
    topH: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#34495e',
        height: '12%',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 0
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txt: {
        color: '#fff',
        fontSize: 24
    }
})