import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import  Video  from 'react-native-video'

export default class VideoPlayer extends Component {

    render(){
        return(
            <Video source={{uri: "https://www.youtube.com/watch?v=0BBGUmfVJ94"}}   
            ref={(ref) => {
              this.player = ref
            }}                                     
            rate={1.0}                              
            volume={1.0}                            
            muted={false}                          
            paused={false}                         
            resizeMode="cover"                     
            repeat={true}                          
            playInBackground={false}                
            playWhenInactive={false}                
            ignoreSilentSwitch={"ignore"}            
            progressUpdateInterval={250.0}           
            onLoadStart={this.loadStart}             
            onLoad={this.setDuration}               
            onProgress={this.setTime}               
            onEnd={this.onEnd}                      
            onError={this.videoError}               
            onBuffer={this.onBuffer}                
            onTimedMetadata={this.onTimedMetadata}  
            style={styles.backgroundVideo} />
    
        )
        
     // Later to trigger fullscreen 
     this.player.presentFullscreenPlayer()
      
     // To set video position in seconds (seek) 
     this.player.seek(0)
        
     // Later on in your styles.. 
     
    
        
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });