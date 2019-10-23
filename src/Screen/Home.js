import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { get_data, get_city, storeGeolocation } from '../Redux/actions';
import Forecast from '../Component/Forecast';
import { withNavigation, SafeAreaView, } from "react-navigation";

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

    const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            console.log('FOCUSSSSS');
            let geoOptions = {
              enableHighAccuracy: true,
              timeOut: 20000,
              maximumAge: 60 * 60 * 24
            };
            Geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
        });
  }

  componentWillUnmount() {
    this.focusListener.remove();
}

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude }
    })
    const lat = this.state.where.lat;
    const long = this.state.where.lng;
    this.props.storeGeolocation(lat, long);
  }

  geoFailure = (err) => {
    this.setState({ error: err.message });
  }

  render() {
    // if (!this.props.isgeoSel) {
    //   console.log(this.props.isgeoSel)
    //   return (
    //     <View style={{ flex: 1, }}>
    //       <Forecast lat={this.props.lat} long={this.props.long} ></Forecast>
    //     </View>
    //   )
    // }
    const load = this.props.isgeoSel;

    console.log('STATUS',this.props.geoLat, this.props.long, this.props.isgeoSel);
      return (
        <View style={{ flex: 1, }}>
          {load?
              <Forecast lat={this.props.geoLat} long={this.props.geotLong} ></Forecast>
            :
              <Forecast lat={this.props.selLat} long={this.props.selLong} ></Forecast>}
          {this.props.get_data(this.props.selLat,this.props.selLong)}
        </View>
      );
  }
}

function mapStateToProps(state) {
  const { weather, city, ready, daily } = state.dataAPI;
  const { geoLat, geotLong, isgeoSel,selLat,selLong } = state.search;
  return { weather, city, ready, daily, geoLat, geotLong, isgeoSel,selLat,selLong }
}

export default withNavigation(connect(mapStateToProps, { get_data, get_city, storeGeolocation })(Home))