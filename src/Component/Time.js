import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import 'Intl';
// import 'intl/locale-data/jsonp/en';
import moment from 'moment';
export class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const day =moment.unix(this.props.children).format('dddd')
    //console.log('DAY ',day)
    return (
      <View>
        <Text style={styles.text}>{day}</Text>
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
