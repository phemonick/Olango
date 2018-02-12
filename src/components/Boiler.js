import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, DeviceEventEmitter, Modal } from 'react-native';
import Voximplant from 'react-native-voximplant'
var update = require("react-addons-update")
import ColorSwitch from './ColorSwitch'
import { createIconSet } from 'react-native-vector-icons'

let giphMap = {
    speaker: "\uE600",
    "mic-mute": "\uE601",
    keypad: "\uE602",
    "and-mute": "\uE603",
    phone: "\uE604",
    hangup: "\uE605",
    flipCamera: "\uE606"
}
let Icon = createIconSet(giphMap, "icomoon")
let number = ""
let camera = 'front'
let settings_p2p = false
let settings_video = false

DeviceEventEmitter.addListener("callRinging", callid=> {
    console.log("call Ringing")
} )

export default class Boiler extends Component {

    constructor() {
        super()
        this.state = {
            isModalOpen = false,
            status = 'idle'

        }
        Voximplant.SDK.switchToCamera(camera)
    }

    componentDidMount() {
        this._thisNumber.focus()
    }

    updateNumber(text) {
        number = text
        this._thisNumber.setNativeProps({text: text})

    }

    onSubmit(event) {
        this.makeCall();
    }

    makeCall() {
        console.log('calling ', number)
        Voximplant.SDK.createCall(
            number,
            settings_video,
            null,
            (callId)=> {
                currentCallId = callId
                if (settings_p2p)
                    Voximplant.SDK.startCall(callId, {"X-DirectCall": "true" })
                else Voximplant.SDK.startCall(callId)
                this.setState(
                    update(this.state, {
                        $merge: {
                            status: "calling"
                        }
                    })
                );
            }.bind(this)
        );
    }

    videoSwitch(value){
        settings_video = value;
        setTimeout(() => {
            this.forceUpdate();
        }, 200)
    }

    switchCamera() {
        if (camera === "front") {
            Voximplant.SDK.switchToCamera("back")
            camera = "back"
        } else {
            Voximplant.SDK.switchToCamera("front");
            camera = "front"
        }
    }


    render() {

        let button, settingsTable, keypad, videoPanel, callingText, numberInput

        if (this.state.status == 'idle' ) {
            numberInput = (
                <TextInput 
                    onChangeText = { e => this.onSubmit(e) }
                    placeholder = "User to call"
                    initialValue = {number}
                    onSubmitEditing = { e => this.onSubmit(e) }
                    ref = { component => {this._thisNumber = component} }
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
            );

            button = (
                <View>
                    <Icon.button
                        name = "phne"
                        size = {20}
                        backgroundColor = "transparent"
                        onPress = {e => this.makeCall(e) }
                    />
                </View>
            );
            settingsTable  = (
                <View>
                    <View>
                        <Text> peer to peer </Text>
                        <ColorSwitch
                            defaultValue = {settings_video}
                            valueUpdate = { value => {
                                settings_p2p = value
                            } }
                        />
                    </View>
                    <View>
                        <Text> video </Text>
                        <ColorSwitch
                            defaultValue = {settings_video}
                            valueUpdate = { e => this.videoSwitch(e) }
                        />
                    </View>
                </View>
            )
        }
        return(
            <View>
                <Test> HELLO BOILER </Test>
            
            <View>
                {videoPanel}
                {callingText}
                {numberInput}
                {keypad}
                {button}
                {settingsTable}

            </View>
            <Modal>
            
            </Modal>
            
            
            
            </View>
        )
    }
}