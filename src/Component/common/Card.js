import React from 'react';
import {  View,StyleSheet } from 'react-native';

const Card =(props) => {
    const {Container}=Styles;
    //const { width, height }= this.props;
    //console.log(props)
  return(
    <View style={[
      Container,
      {
        width:props.width,
        height:props.height, 
        justifyContent:props.center,
        alignItems:props.center, 
      }
      ]}
      >
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
        borderRadius:5,
        elevation:1,
        marginLeft: 15,
        marginRight:5,
        marginTop:10,
        backgroundColor:'rgba(10, 0, 0, .4)',
    },
    Center:{
      justifyContent:'center',
      alignItems:'center'
    }
})