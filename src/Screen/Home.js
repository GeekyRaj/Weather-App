import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {  } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { Card, CardRow, Spinner, Header } from '../Component/common';
import SevenDay from './SevenDay';
import style from '../Style/Style';
import { connect } from 'react-redux';

import { get_data, get_city} from '../Redux/actions';
import { SafeAreaView } from 'react-navigation';
import Climate from '../Component/Climate';
import BackgoundImage from '../Component/common/BackgoundImage';


class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Weather',
       headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerLeft:
        (<IconAnt
          style={{ paddingLeft: 16, color: '#ffffff' }}
          onPress={() => navigation.navigate('CityOption')}
          name="plus"
          size={25}
        />),
      headerRight:
        (<IconAnt
          style={{ paddingRight: 16, color: '#ffffff' }}
          onPress={() => navigation.navigate('setting')}
          name="setting"
          size={30}
        />),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      where: { lat: null, lng: null },
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
    Geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);

    
  }

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude }
    })
    //console.log('GeoData : ', this.state.where.lat, ' , ', this.state.where.lng);
    const lat=this.state.where.lat;
    const lng=this.state.where.lng;
    this.props.get_city({lat,lng});
    this.props.get_data({lat,lng});
  }

  geoFailure = (err) => {
    this.setState({ error: err.message });
  }

  render() {
    const { text, textdata, } = Styles;
    const { navigate } = this.props.navigation;
    console.log('REDUX data',this.props.weather)
    const API = this.props.weather;
    const currently = API.currently;
    //const temp = (currently.temperature -32)*5/9;
    const dailyData = this.props.daily.data;
    const city = this.props.city;
    //console.log('CITY ',this.props.city)

    if (!this.props.ready) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Spinner></Spinner>
        </View>
      )
    }


    return (
      <View style={{ flex: 1, }}>
        <BackgoundImage>
        {/* <View style={{margin:5}}>
        <CardRow>
          <TouchableOpacity onPress={() => navigate('notification')}>
            <CardRow>
              <IconAnt
                style={{ paddingRight: 5, color: 'blue' }}
                onPress={() => navigation.navigate('two')}
                name="notification"
                size={20}
              />
              <Text style={style.textLink}>
                Notification
              </Text>
            </CardRow>
           </TouchableOpacity>

          <TouchableOpacity style={{paddingLeft: 60,}}>
            <View style={{flexDirection:'row-reverse'}}>
            <CardRow>
              <IconAnt
                style={{ paddingRight: 10, color: 'blue' }}
                onPress={() => navigation.navigate('notification')}
                name="exclamationcircle"
                size={20}
              />
              <Text style={style.textLink}>
                Report Weather
              </Text>
            </CardRow>
            </View>
            </TouchableOpacity>
          </CardRow>
          </View> */}

        <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{city.state_district}</Text>
          <Text style={{ fontSize: 20, }}>{city.state}</Text>
          <Climate size={70}>{currently.icon}</Climate>
          <Text style={{ fontSize: 20, }}>{currently.summary}</Text>
        </View>

        <View style={{  alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 70,color:'white' }}>{((currently.temperature -32)*5/9).toFixed(2)}{"\u00B0"}</Text>
          <CardRow>
            <TouchableOpacity>
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingRight: 15, color: 'white' }}>{"\u2103"}</Text>
            </TouchableOpacity>
            <View style={{ width: 2, height: 30, backgroundColor: 'black',paddingTop: 15, }}></View>
            <TouchableOpacity>
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15, color: 'gray' }}>{"\u2109"}</Text>
            </TouchableOpacity>
          </CardRow>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          //decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{
            height: 80,
            paddingTop: 15
          }}
        >

          <CardRow>
            <Card width={100} height={80} center='center'>
              <Text style={text}>Humidity</Text>
              <Text style={textdata}>{currently.humidity}</Text>
            </Card>
            <Card width={100} height={80} center='center'>
              <Text style={text}>Clouds</Text>
              <Text style={textdata}>{currently.cloudCover}</Text>
            </Card>
            <Card width={100} height={80} center='center'>
              <Text style={text}>Pressure</Text>
              <Text style={textdata}>{currently.pressure} hPa</Text>
            </Card>
            <Card width={100} height={80} center='center'>
              <Text style={text}>Winds</Text>
              <Text style={textdata}>{currently.windSpeed} m/s</Text>
            </Card>
            <Card width={100} height={80} center='center'>
              <Text style={text}>Ozone</Text>
              <Text style={textdata}>{currently.ozone}</Text>
            </Card>
            <Card width={100} height={80} center='center'>
              <Text style={text}>UV Index</Text>
              <Text style={textdata}>{currently.uvIndex}</Text>
            </Card>
          </CardRow>
        </ScrollView>

        <View style={style.partition}></View>
        <View style={[style.center,{margin:10}]}>
          <Text style={style.Text}>Next 7 Day</Text>
          <Text>{this.props.daily.summary}</Text>
        </View>
        <View style={style.partition}></View>

        <View style={{ flex: 6,marginTop:5 }}>
          <ScrollView>
        <FlatList
              data={dailyData}
              renderItem={({ item }) => 
              <View>
                <SevenDay days={item}/>
              </View>
              }
              keyExtractor={item => item.icon}
              />
              </ScrollView>
              {/* <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.get_data()}>
                        <Text style={{ fontSize: 20 }}>API</Text>
                    </TouchableOpacity>
                </View> */}
        </View>
        </BackgoundImage>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { weather, city, ready, daily } = state.dataAPI
  return { weather, city, ready ,daily }
}


export default connect(mapStateToProps, { get_data, get_city })(Home)

const Styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color:'#eeeeee'
  },
  textdata: {
    fontSize: 13,
    color:'#eeeeee'
  },
  
})
