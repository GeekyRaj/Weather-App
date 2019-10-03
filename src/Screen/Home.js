import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
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
      backgroundColor: '#f4511e',
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
      weather: [],
      main: []
    };
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=8aca4d37b2d42f91ab9265f20e14a9e8')
      .then(response => {
        console.log('DATA', response.data.coord)
        this.setState({
          data: response.data,
          weather: response.data.weather[0],
          main: response.data.main,
          wind: response.data.wind,
          cloud: response.data.clouds
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {text}=Styles

    console.log(this.state.wind)
    const { navigate } = this.props.navigation;
    const wicon = this.state.weather.icon;
    const temp = this.state.main.temp -273.15;
    return (
      <View style={{ flex: 1, margin: 20, }}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontSize:30,fontWeight:'bold'}}>{this.state.data.name}</Text>
        </View>
        
        <CardRow>
          <View style={{ flex: 2, alignItems: 'center', }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: `http://openweathermap.org/img/w/${wicon}.png` }}
            ></Image>
            <Text style={{ fontSize: 20,}}>{this.state.weather.description}</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 70 }}>{temp}{"\u00B0"}</Text>
            <CardRow>
              <Text style={{ fontSize:30,fontWeight:'bold',paddingRight:15, color:'black'}}>{"\u2103"}</Text>
              <View style={{ width:2, height:30,backgroundColor:'red'}}></View>
              <Text style={{ fontSize:30,fontWeight:'bold',paddingLeft:15, color:'gray'}}>{"\u2109"}</Text>
            </CardRow>
          </View>
        </CardRow>
        <CardRow>
        <Card>
          <Text style={text}>Pressure</Text>
          <Text>{this.state.main.pressure}</Text>
        </Card>
        <Card>
          <Text style={text}>Humidity</Text>
          <Text>{this.state.main.humidity}</Text>
        </Card>
        <Card>
          <Text style={text}>Winds</Text>
          <Text>{this.state.wind.speed}</Text>
        </Card>
        <Card>
          <Text style={text}>Clouds</Text>
          <Text>{this.state.cloud.all}</Text>
        </Card>
        </CardRow>
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

const Styles=StyleSheet.create({
  text:{
    fontSize:20,
  }
})

export default Home;
