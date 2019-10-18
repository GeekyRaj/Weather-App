import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {Spinner} from '../Component/common/Spinner';
import style from '../Style/Style';
export default class StartingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:"true"
       }
    setTimeout(()=>{
        this.props.navigation.navigate('one')
        this.setState({isLoading:!this.state.isLoading})
    },500)
     }
 render() {
      const {ViewStyles,textStyles}=container
    return (
        <View style={[{flex:1,marginTop:300},style.center]}>
            <Icon name="day-cloudy" size={150} color="#000000"/>
            <Text style={style.text10}>rnWeather</Text>
            <Spinner size="large"/>
         </View>
    );
  }
}
const container=StyleSheet.create({

})