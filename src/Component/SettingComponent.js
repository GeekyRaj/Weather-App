import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackgoundImage from './common/BackgoundImage';
import { Card, CardRow } from './common';
import style from '../Style/Style';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const head =this.props.title;
    const nav = this.props.onPress;
    console.log(nav,head)
    return (
      <View>
          <TouchableOpacity onPress={nav}>
          <Card height={60} width='90%' >
            <CardRow>
              <View style={ {flex: 4, paddingTop:17,paddingLeft:20} }>
                  <Text style={style.whiteHeader}>{head}</Text>
                </View>
                <View style={{ flex: 1,paddingTop:17}}>
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
