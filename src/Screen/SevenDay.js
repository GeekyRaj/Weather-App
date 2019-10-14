import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import { CardRow } from '../Component/common';
import style from '../Style/Style';
import Time from '../Component/Time';
import Temp from '../Component/Temp';
import Climate from '../Component/Climate';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

class SevenDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('SEVEN DAY ',this.props.days)
    const day =this.props.days;
    const tlow= day.temperatureLow;
    const thigh = day.temperatureHigh;
    return (
      <View style={{margin:5, marginLeft:10,flex:1}}>
        <TouchableWithoutFeedback onpress={()=>this.props.navigation.navigate('SevenDay')}>
        <CardRow>
          <View style={[style.center,{ marginRight: 20,flex:4 }]}>
            <Time>{day.time}</Time>
          </View>
          <View style={[style.center,{flex:1}]}>
            {/* <Image
              style={{ width: 50, height: 50, paddingTop: 20 }}
              source={{ uri: `http://openweathermap.org/img/w/50d.png` }}
            >
            </Image> */}
            <Climate size={30}>{day.icon}</Climate>
          </View>
          <View style={[style.center, { paddingLeft: 30,flex:4 }]}>
            <CardRow>
              {/* <Text style={[style.text10,{paddingRight:20}]}>{tlow} {"\u00B0"}  /  {thigh} {"\u00B0"}</Text> */}
              <Temp >{tlow}</Temp> 
              <Text> / </Text>
              <Temp>{thigh}</Temp>
            </CardRow>
          </View>
        </CardRow>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default SevenDay;
