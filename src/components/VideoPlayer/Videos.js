import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import  VideoPlayer  from 'react-native-video-controls'

export default class VideoMedia extends Component {

    render(){
        return(
          <VideoPlayer source={{uri: this.props.video, mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version. 
            navigator={ this.props.navigator }
            seekColor={ '#3498db' }             // fill/handle colour of the seekbar
            videoStyle={ {} }                // Style appended to <Video> component
            style={ {} }                     // Style appended to <View> container
        
            // event callbacks
            onError={ () => {} }             // Fired when an error is encountered on load
            onBack={ () => {} }              // Function fired when back button is pressed.
            onEnd={ () => {} }               // Fired when the video is complete.
        
            // disabling individual controls
            disableFullscreen={ false }      // Used to hide the Fullscreen control.
            disableSeekbar={ false }         // Used to hide the Seekbar control.
            disableVolume={ false }          // Used to hide the Volume control.
            disableBack={ false }            // Used to hide the Back control.
            disableTimer={ false }           // Used to hide the Timer control.
            />
        )
      }
    }
   // Later on in your styles.. 
   const styles = StyleSheet.create({
     backgroundVideo: {
       height: 500,
       width: 80+ '%',
       margin: 20
     },
   })
           