import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import { Card, CardRow } from '../Component/common';

class Home extends Component {
  static navigationOptions = {
    headerLeft: (<Icon style={{ paddingLeft: 16, }} name="menu" size={23} color='white'></Icon>),
    headerRight: (<Icon style={{ paddingRight: 16, }} name="dots-three-vertical" size={20} color='white'></Icon>),
    title: 'Weather',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current: [],
      main: [],
      ready: false,
      where: {lat:null, lng:null},
      error: null
    };
  }

  componentDidMount() {
    //GeoLocation
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    this.setState({ ready: false, error: null });
    Geolocation.getCurrentPosition(this.geoSuccess,this.geoFailure,geoOptions);
    console.log('in success ',this.state.data)
  }

  geoSuccess = (position) => {
    console.log(position);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude }
    })
    console.log('GeoData : ',this.state.where.lat,' , ',this.state.where.lng)

    //Weather API
    axios.get(`https://api.darksky.net/forecast/adecc2cfa6cc231c8852eadba20fed23/${position.coords.latitude},${position.coords.longitude}`)
      .then(response => {
        console.log('DATA', response.data);
        this.setState({
          data: response.data,
          current: response.data.currently,
          // wind: response.data.wind,
          // cloud: response.data.clouds
        })
      })
      .catch(error => console.log(error))

      
  }

  geoFailure = (err) => {
    this.setState({ error: err.message });
  }

  render() {
    const { text } = Styles;
    console.log('Test',this.state.data);

    //console.log(this.state.wind)
    const { navigate } = this.props.navigation;
    //const wicon = this.state.weather.icon;
    const temp = this.state.current.temperature;
    return (
      <View style={{ flex: 1, margin: 20, }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.state.data.timezone}</Text>
        </View>

        <View style={{ alignItems: 'center',justifyContent: 'center'  }}>
          <Image
            style={{ width: 70, height: 70 ,paddingTop:20}}
            source={{ uri: `http://openweathermap.org/img/w/50d.png` }}
          ></Image>
          <Text style={{ fontSize: 20, }}>{this.state.current.summary}</Text>
        </View>
        
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center',paddingTop:30,paddingBottom: 20, }}>
            <Text style={{ fontSize: 70 }}>{temp}{"\u00B0"}</Text>
            <CardRow>
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingRight: 15, color: 'black' }}>{"\u2103"}</Text>
              <View style={{ width: 2, height: 30, backgroundColor: 'red' }}></View>
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15, color: 'gray' }}>{"\u2109"}</Text>
            </CardRow>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          style={{
            height: 80,
            paddingTop:20
          }}
        >
          <CardRow>
            <Card>
              <Text style={text}>Pressure</Text>
              <Text>{this.state.current.pressure}</Text>
            </Card>
            <Card>
              <Text style={text}>Humidity</Text>
              <Text>{this.state.current.humidity}</Text>
            </Card>
            <Card>
              <Text style={text}>Winds</Text>
              <Text>{this.state.current.windSpeed}</Text>
            </Card>
            <Card>
              <Text style={text}>Clouds</Text>
              <Text>{this.state.current.cloudCover}</Text>
            </Card>
          </CardRow>
        </ScrollView>
        <View style={{ flex: 6 }}>
          <Card>
            <TouchableOpacity onPress={() => navigate('two')}>
              <Text>SECOND</Text>
            </TouchableOpacity>
          </Card>
        </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
})

export default Home;
