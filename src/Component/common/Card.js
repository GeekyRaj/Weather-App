import React from 'react';
import {  View,StyleSheet } from 'react-native';

const Card =(props) => {
    const {Container}=Styles
  return(
    <View style={Container}>
        {props.children}
    </View>
    )
  }

export { Card } ;

const Styles=StyleSheet.create({
    Container:{
        shadowColor:'black',
        shadowOffset:{width:5,height:2},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:1,
        marginLeft: 15,
        marginRight:5,
        marginTop:10,
        margin:10,
        width:100,
        height:80,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})