import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Fab extends Component {

    constructor(){
        super();
        this.state={
            pressed: false
        }
    }

    render(){
        const elevation = this.state.pressed ? 13: 6;
        const ripple = TouchableNativeFeedback.Ripple('#AAF', true)
        return(
            <View style = { [styles.fab, {elevation}, this.props.fab] }>
                <TouchableNativeFeedback
                 onPressIn={()=>this.setState({pressed: true})}
                 onPressOut={()=>this.setState({pressed: false})}
                 background={ripple} onPress={this.props.onPress}  >
                    <View style = { styles.iconCOntainer }>
                    <Icon name='web' color='#000' size={30} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    fab: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 28,
        elevation: 6,
        backgroundColor: '#FFFFFF'
    },
    iconCOntainer: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 28
    }
})