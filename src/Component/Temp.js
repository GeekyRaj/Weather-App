import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Temp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tem = this.props.children.toFixed(1);
    console.log(tem)
    return (
      <View>
        <Text style={styles.text}>{tem} {"\u00B0"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    //fontFamily: R.fonts.psRegular,
    fontSize: 20
  }
});

export default Temp;
