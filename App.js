/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import stores from './src/components/store'
import Login from './src/components/Login/Login'
import Signup from './src/components/Signup/Signup'
import Home from './src/components/Home/Home'
import AppNavigator from './src/components/app'

 
export default class App extends Component {
  render() {
    return (
      <Provider stores={stores} >
        <AppNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
