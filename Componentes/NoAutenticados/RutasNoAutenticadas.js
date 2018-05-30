import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp'
        }
    },
});

export { RutasNoAutenticadas };