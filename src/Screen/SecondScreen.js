import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text> SecondScreen </Text>
      </View>
    );
  }
}

export default SecondScreen;
