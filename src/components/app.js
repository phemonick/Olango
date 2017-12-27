import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './Login/Login';
import Home from './Home/Home';
import SignUp from './Signup/Signup';
import Menu from './menu';
import SignIn from './Social/signIn'
import Screen from './VideoPlayer/Screen'
import Lessons from './Lessons/Lessons'


const myDrawer = DrawerNavigator({
    Home: { screen: Login,
        navigationOptions: {
            header: null,
          },
    },
    SignIn: { screen: SignIn,
        navigationOptions: {
        header: null,
        },
    },
    Hom: { screen: Home,
        navigationOptions: {
            header: null,
          },
    },
    SignUp: { screen: SignUp,
        navigationOptions: {
            header: null,
          },
    },
    Screen: { screen: Screen,
        navigationOptions: {
            header: null,
          },
    },
    Lessons: {
        screen: Lessons,
        navigationOptions: {
            
        }
    }
},
{
    contentComponent: props => <Menu {...props} />
}
)

const nativeShop = StackNavigator({
    Home: { screen: Login,
        navigationOptions: {
            header: null,
          },
    },
    Hom: { screen: myDrawer,
        navigationOptions: {
            header: null,
          },
    },
    SignUp: { screen: SignUp,
        navigationOptions: {
            header: null,
          },
    },
    Screen: { screen: Screen,
        navigationOptions: {
            header: null,
          },
        },
    SignIn: { screen: SignIn,
        navigationOptions: {
        header: null,
        }
    },
    Lessons: {
        screen: Lessons,
        navigationOptions: {

        }
    }

    
});

export default nativeShop;