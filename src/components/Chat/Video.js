import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native'
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    getUserMedia } from 'react-native-webrtc'
 
export default class MyCall extends Component {

    state = {
        videoURL: null,
        isFront: true
    }

    componentDidMount(){
        const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
        const pc = new RTCPeerConnection(configuration);
        const { isFront } = this.state
        MediaStreamTrack.getSources()
            .then(sourceInfos => {
                console.log( 'MediaStreamTrack.getSources' ,sourceInfos);
                let videoSourceId;
                for (let i = 0; i < sourceInfos.length; i++) {
                const sourceInfo = sourceInfos[i];
                if(sourceInfo.kind == 'video' && sourceInfo.facing == (isFront ? 'front' : 'back')) {
                    videoSourceId = sourceInfo.id;
                }
                }
                return getUserMedia({
                audio: true,
                video: Platform.OS === 'ios' ? false : {
                    mandatory: {
                    minWidth: 500, // Provide your own width, height and frame rate here
                    minHeight: 300,
                    minFrameRate: 30
                    },
                    facingMode: (isFront ? 'user' : 'environment'),
                    optional: (videoSourceId ? [{sourceId: videoSourceId}] : [])
                }
                });
            })
            .then(stream => {
                console.log('Streaming OK', stream);
                this.setState({
                    videoURL: stream.toURL()
                })
                pc.addStream(stream);
                return stream
            })
            .catch(logError => {
                console.log('error in here', logError)
                throw logError
            });
            pc.createOffer()
                .then(pc.setLocalDescription)
                .then(() => {
                    console.log('local description' )
                    // Send pc.localDescription to peer
                })
                .catch(logError);

                pc.onicecandidate =  (event) => {

                    console.log('onIndicate', event )
                // send event.candidate to peer
                };
    }

    render(){
        return(
            <View  >
                <RTCView streamURL={this.state.videoURL}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: '#000'
    }
}