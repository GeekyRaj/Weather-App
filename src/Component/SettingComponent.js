import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackgoundImage from './common/BackgoundImage';
import { Card, CardRow } from './common';
import style from '../Style/Style';
import IconAnt from 'react-native-vector-icons/AntDesign';

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const head = this.props.title;
    const nav = this.props.onPress;
    console.log(nav, head, this.props.show)
    return (
      <View>
        <TouchableOpacity onPress={nav}>
          <Card height='auto' width='90%' >
            <CardRow>
              <View style={{ flex: 4, paddingTop: 17, paddingLeft: 20 }}>
                <Text style={style.whiteHeader}>{head}</Text>
                
                <Text style={style.settingDisplay}>{this.props.show}</Text>
              </View>
              <View style={{ flex: 1, paddingTop: 17 }}>
                <IconAnt
                  style={{ paddingLeft: 16, color: '#ffffff' }}
                  name="right"
                  size={25}
                />
              </View>
            </CardRow>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}


export default SecondScreen;
