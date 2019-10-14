import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Notify from './Screen/Notify';
import AddCity from './Screen/AddCity';
import SevenDay from './Screen/SevendayDetail'

const AppStack = createStackNavigator({
    one:{
        screen:Home
    },
    setting:{
        screen:Setting
    },
    notification:{
        screen: Notify
    },
    AddCity:{
        screen: AddCity
    },
    SevenDay:{
        screen: SevenDay
    }

})

export default createAppContainer(AppStack);