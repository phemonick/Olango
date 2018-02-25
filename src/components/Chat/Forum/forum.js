import React, {Component} from 'react';
import { Text, View,StatusBar, StyleSheet, BackHandler } from 'react-native';
import ForumBody from './forumBody'
import General from './General'

export default class Forum extends Component{

    constructor(){
        super()
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        //  this.props.navigation.goBack();
         this.props.navigation.navigate('Hom')
        return true;
    }
    
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    render(){
        return(
            <View style ={styles.container} >
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                <View style = {styles.topH} > 
                    <Text style = {styles.txt} > General Forum </Text>
                </View>
                <General />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex'
    },
    topH: {
        backgroundColor: '#34495e',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 24
    }

})