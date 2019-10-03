import React from 'react';
import {  View,StyleSheet } from 'react-native';

const CardCol =(props) => {
    const {Container}=Styles
  return(
    <View style={Container}>
        {props.children}
    </View>
    )
  }

export { CardCol } ;

const Styles=StyleSheet.create({
    Container:{
        // marginLeft: 5,
        // marginRight:5,
        // marginTop:10,
        flexDirection:'column'
    }
})