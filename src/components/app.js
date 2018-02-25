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
import Call from './Chat/Call'
import CompletedCourses from './CompletedCourses'
import Intermediates from './Intermediates'
import Scheme from './Intermediates/Scheme'
import AdminHome from './Chat/Tutor/'
import ForgotPassword from './Login/ForgotPassword'
import Vid from './Chat/Vid'

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
    AdminHome: {
        screen: AdminHome
    },
    Pay: {
        screen: Pay
    },
    Forum: { screen: Forum,
        navigationOptions: {
             
          }
        },
    User: {
        screen: User
    },
    CompletedCourses: {
        screen: CompletedCourses,
        navigationOptions: {
            header: null
        }
    },
    Intermediates: {
        screen: Intermediates
    },
    Call: {
        screen: Call
    },
    Vid: {
        screen: Vid
    },
    
    Scheme: {
        screen: Scheme
    },
    EmailConfirm: {
        screen: EmailConfirm
    },
    ForgotPassword: {
        screen: ForgotPassword
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
