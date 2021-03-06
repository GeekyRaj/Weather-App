import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Notify from './Screen/Notify';
import AddCity from './Screen/AddCity';
import SevenDay from './Screen/SevendayDetail';
import Flash from './Screen/FlashScreen';
import CityOption from './Screen/CityOption';
import ForeCast from './Screen/ForeCast';
import Language from './Screen/Language';
import TimeMachine from './Screen/TimeMachine';

const AppStack = createStackNavigator({
    // start:{
    //     screen:Flash,
    //     navigationOptions:{
    //         header:null,
    //         headerBackTitle:null
    //    }
    // },
    one:{
        screen:Home,
        navigationOptions:{
           headerBackTitle:null
       }
    },
    setting:{
        screen:Setting,
        navigationOptions:{
            title:'Settings',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:20,
                color:'white'
            },
            headerStyle: {
                backgroundColor: 'black',
              },
        },
    },
    notification:{
        screen: Notify,
        navigationOptions:{
            headerBackTitle:null
        }
    },
    CityOption:{
        screen: CityOption,
        navigationOptions:{
            title:'Manage Cities',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:20,
                color:'white'
            },
            headerStyle: {
                backgroundColor: 'black',
              },
        },
    },
    AddCity:{
        screen: AddCity,
        navigationOptions:{
            title:'Search City',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:20,
                color:'white'
            },
            headerStyle: {
                backgroundColor: 'black',
              },
        },
    },
    SevenDay:{
        screen: SevenDay,
        navigationOptions:{
            headerBackTitle:null
        }
    },
    ForeCast:{
        screen: ForeCast,
        navigationOptions:{
            headerBackTitle:null
        }
    },
    language:{
        screen:Language,
        navigationOptions:{
            title:'Language',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:20,
                color:'white'
            },
            headerStyle: {
                backgroundColor: 'black',
              },
        },
    },
    TimeMachine:{
        screen:TimeMachine,
        navigationOptions:{
            title:'Time Machine',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:20,
                color:'white'
            },
            headerStyle: {
                backgroundColor: 'black',
              },
        },
    },

});

const Main = createSwitchNavigator(
    {
      SplashScreen: {
        screen: Flash
      },
      HomeFlow: {
        screen: AppStack
      }
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false
      }
    }
  );

export default createAppContainer(Main);