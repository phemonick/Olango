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
import EmailConfirm from './Signup/EmailConfirm'
import ChatLogin from './Chat'
import ChatRegister from './Chat/Register'

const RouteConfig = {
    initialRoute: 'Splash',
    
        contentComponent: props => <Menu {...props} />
    
}

const AppNavigator = DrawerNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
          },
    },
    Hom:  { screen: Home,
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
    Draw: {
        screen: Home
    },
    ChatLogin: {
        screen: ChatLogin,
        navigationOptions: {
            header: null
        }
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
    },
    ChatRegister: {
        screen: ChatRegister,
        navigationOptions: {
            header: null
        }
    }
},
RouteConfig
)

const myDrawer = StackNavigator({
    initialRoute:  { screen: Splash,
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
    EmailConfirm: {
        screen: EmailConfirm
    },
    Draw: { screen: Home,
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

export default AppNavigator;
