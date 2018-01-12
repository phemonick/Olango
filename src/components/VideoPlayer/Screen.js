import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VideoPlayer from './Videos'

export default class Screen extends Component {
    render(){
        const { params } = this.props.navigation.state
        return(
            <View style = {styles.container}>
                
                    <VideoPlayer video={params.video} />
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        
        
    },
    video: {
        
    }
})