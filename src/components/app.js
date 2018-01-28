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
import LessonScheme from './Lessons/LessonScheme'
import Exercises from './Lessons/Exercises'
import Tutor from './Chat/Tutor/Chat'
import Pay from './Payment/Pay'
import Forum from './Chat/Forum/forum'
import User from './Chat/Home/Users'
import Splash from './Splash'

const myDrawer = DrawerNavigator({
    Home:  { screen: Home,
        navigationOptions: {
            header: null,
          },
    },
    Login: { screen: Login,
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
        navigationOptions:{
            header: null
        },
        
    },
    LessonScheme: {
        screen: LessonScheme,
        navigationOptions: {
            header: null
        }
    },
    Exercises: {
        screen: Exercises
    },
    Tutor: {
        screen: Tutor
    },
    Pay: {
        screen: Pay
    },
    Forum: { screen: Forum,
        navigationOptions: {
             header: null,
          }
        },
    User: {
        screen: User
    }
},

{
    contentComponent: props => <Menu {...props} />
}
)

const nativeShop = StackNavigator({
    Home:  { screen: Splash,
        navigationOptions: {
            header: null,
          },
    },
    Login: { screen: Login,
        navigationOptions: {
            header: null,
          },
    },
    SignUp: { screen: SignUp,
        navigationOptions: {
            header: null,
          },
    },
    Draw: { screen: myDrawer,
        navigationOptions: {
             header: null,
          },
    },
    Screen: { screen: Screen,
        navigationOptions: {
            // header: null,
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
