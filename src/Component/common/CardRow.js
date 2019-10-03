import React from 'react';
import {  View,StyleSheet } from 'react-native';

const CardRow =(props) => {
    const {Container}=Styles
  return(
    <View style={Container}>
        {props.children}
    </View>
    )
  }

export { CardRow } ;

const Styles=StyleSheet.create({
    Container:{
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection:'row'
    }
})