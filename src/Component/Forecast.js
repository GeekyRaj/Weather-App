import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import { Card, CardRow, Spinner, Header } from './common';
import SevenDay from '../Screen/SevenDay';
import style from '../Style/Style';
import { connect } from 'react-redux';
import { get_data, get_city, storeGeolocation } from '../Redux/actions';
import Climate from './Climate';
import BackgoundImage from './common/BackgoundImage';
import { withNavigation, SafeAreaView, } from "react-navigation";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    console.log('Forecast');
    
    // this.props.get_city({lat,long});
    // this.props.get_data({lat,long});

    const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            console.log('FORECAST FOCUSSSSS');
            const lat =this.props.lat;
            const long = this.props.long;
            const lang = this.props.lang;
            const unit = this.props.unit;
            console.log(lat,long, this.props.place,lang,unit);
            this.props.get_city({lat,long});
            this.props.get_data({lat,long,lang,unit});

        });
  }
  componentWillUnmount() {
    this.focusListener.remove();
}

  render() {
    console.disableYellowBox = true;
    const { text, textdata, } = Styles;
    console.log('REDUX data',this.props.weather)
    const API = this.props.weather;
    const currently = API.currently;
    //const temp = (currently.temperature -32)*5/9;
    const dailyData = this.props.daily.data;
    const city = this.props.city;
    if (this.props.ready) {
        return (
          <View style={{ flex: 1,}}>
            <BackgoundImage>
            <Spinner></Spinner>
            </BackgoundImage>
          </View>
        )
      }
  
  
      return (
        <View style={{ flex: 1, }}>
          <BackgoundImage>
          
          <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{city.state_district}</Text>
            <Text style={{ fontSize: 20, }}>{city.state}</Text>
            <Climate size={70}>{currently.icon}</Climate>
            <Text style={{ fontSize: 20, }}>{currently.summary}</Text>
          </View>
  
          <View style={{  alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 70,color:'white' }}>{(currently.temperature).toFixed(2)}{"\u00B0"}</Text>
            {/* <CardRow>
              <TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', paddingRight: 15, color: 'white' }}>{"\u2103"}</Text>
              </TouchableOpacity>
              <View style={{ width: 2, height: 30, backgroundColor: 'black',paddingTop: 15, }}></View>
              <TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15, color: 'gray' }}>{"\u2109"}</Text>
              </TouchableOpacity>
            </CardRow> */}
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
                renderItem={({ item, index }) => 
                <View>
                  <SevenDay days={item}/>
                </View>
                }
                keyExtractor={(item,index) => item.icon+index}
                />
                </ScrollView>
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
  
  
  export default withNavigation(connect(mapStateToProps, { get_data, get_city, storeGeolocation })(Forecast))
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