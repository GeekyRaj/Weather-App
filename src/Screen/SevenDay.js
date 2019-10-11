import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import { CardRow } from '../Component/common';
import style from '../Style/Style';

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
      <View style={style.center}>
        <CardRow>
          <View style={{ marginRight: 20, }}>
            <Text style={style.Text}>Day</Text>
            <Text style={style.text10}>temp</Text>
          </View>
          <View style={style.center}>
            <Image
              style={{ width: 40, height: 40, paddingTop: 20 }}
              source={{ uri: `http://openweathermap.org/img/w/50d.png` }}
            >
            </Image>
          </View>
          <View style={[style.center, { paddingLeft: 20 }]}>
            <CardRow>
              <Text style={[style.text10,{paddingRight:20}]}>{tlow} %</Text>
              <Text style={style.text10}>{thigh} %</Text>
            </CardRow>
          </View>
        </CardRow>
      </View>
    );
  }
}

export default SevenDay;
