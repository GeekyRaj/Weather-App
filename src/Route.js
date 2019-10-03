import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Screen/Home';
import SecondScreen from './Screen/SecondScreen';
const AppStack = createStackNavigator({
    one:{
        screen:Home
    },
    two:{
        screen:SecondScreen
    }
})

export default createAppContainer(AppStack);