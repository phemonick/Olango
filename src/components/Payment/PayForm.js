import React, { Component } from 'react';
import RNPaystack, {chargeCard} from 'react-native-paystack';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class PayForm extends Component {

    constructor() {
        super();
        this.state = {
            cardNum: '',
            date: '',
            cvv: ''
        }

    }

    cardNum(data) {
        this.setState({
            cardNum: data
        })
    }
    date(data) {
        this.setState({
            date: data
        })
    }
    cvv(data) {
        this.setState({
            cvv: data
        })
    }

   /*  PIN: 1234
    OTP: 123456 */

    pay() {
        
        RNPaystack.chargeCard({
            cardNumber: '5060 6666 6666 6666 666',
            expiryMonth: '10',
            expiryYear: '17',
            cvc: '123',
            email: 'ainojie@gmail.com',
            amount: 35000 * 100
        })
            .then(response => {
                console.log(response); // do stuff with the token
            })
            .catch(error => {
                console.log(error); // error is a javascript Error object
                console.log(error.message);
                console.log(error.code);
            })


    }


    render() {

        return (
            <View style={styles.container} >
                <View style={styles.top} >
                    <Text style={styles.cardText} > We the best Music </Text>
                    <TouchableOpacity style={styles.Language} >
                        <Text style={styles.cardText} > French </Text>
                    </TouchableOpacity>
                    <Text style={styles.cardText} > Enrolment fee: 60k </Text>
                </View>
                <View style={styles.bottom} >
                    <Text style={styles.smallTest} > French </Text>
                    <TextInput
                        onChangeText={this.cardNum.bind(this)}
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Card Number'
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <View style={styles.name}>
                        <TextInput
                            onChangeText={this.date.bind(this)}
                            style={styles.fandLast}
                            underlineColorAndroid='transparent'
                            placeholder='Exp Date '
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <TextInput
                            onChangeText={this.cvv.bind(this)}
                            style={styles.fandLast}
                            underlineColorAndroid='transparent'
                            placeholder=' CVV'
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity onPress={this.pay.bind(this)} style={styles.pay}>
                        <Text style={styles.btnTest} > Pay </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    top: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100 + '%'
    },
    bottom: {
        display: 'flex',
        width: 100 + '%',
        alignItems: 'center'
    },
    cardText: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 25,
        color: '#fff'
    },
    Language: {
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'center',
        width: 40 + '%',
        height: 30 + '%',
        backgroundColor: '#2ecc71'
    },
    smallTest: {
        color: '#bdc3c7'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 15,
        height: 50,
        width: 70 + '%',
        textAlign: 'center',
        color: '#7f8c8d',
        fontSize: 20,
        borderRadius: 6,
        paddingHorizontal: 20,
        marginBottom: 10
    },
    pay: {
        backgroundColor: '#2ecc71',
        width: 70 + '%',
        borderRadius: 6,
        paddingVertical: 15,


    },
    fandLast: {
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 10,
        width: 50 + '%',
        height: 50,
        color: '#7f8c8d',
        borderRadius: 6,
        paddingHorizontal: 20
    },

    name: {
        backgroundColor: 'rgba(255,255,255,1)',
        height: 50,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 70 + '%',
        borderRadius: 6,
    },
    btnTest: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})