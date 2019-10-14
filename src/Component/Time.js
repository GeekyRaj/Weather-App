import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var myDate = new Date(this.props.children * 1000);
    console.log('MYDATE : ',myDate);
    var options = { weekday: 'long'};
    const dayvar = new Intl.DateTimeFormat('en-US', options).format(myDate);
    console.log(dayvar)
    return (
      <View>
        <Text style={styles.text}>{dayvar}</Text>
        {/* <Text>{myDate.getDay("en-IN")}</Text> */}
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

export default Time;
