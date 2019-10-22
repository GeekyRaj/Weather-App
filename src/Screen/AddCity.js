import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity ,AsyncStorage} from 'react-native';
import BackgoundImage from '../Component/common/BackgoundImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { CardRow, Spinner } from '../Component/common';
import { connect } from 'react-redux';
import { searchResult, changeLocation } from '../Redux/actions';

class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      msg: '',
    };
  }

  changeText(text) {
    this.setState({ place: text });
  }
  onSubmitEditing(){
    // if (this.state.place === "") {
    //   this.setState({ msg: 'Enter Place' });
    // }
    // else {
    //   this.props.searchResult(this.state.place);
    // }
    console.log(this.state.place)
  }

  searchPlace() {
    if (this.state.place === "") {
      this.setState({ msg: 'Enter Place' });
    }
    else {
      this.props.searchResult(this.state.place);
    }
  }

  render() {
    console.log(this.state.place)
    console.log('REDUX', this.props.locn);
    return (
      <View style={{ flex: 1 }}>
        <BackgoundImage>
          <CardRow>
            <TextInput
              placeholder="Search Place"
              placeholderTextColor="#dddddd"
              autoCorrect={false}
              multiline={true}
              style={{
                height: 40,
                width: '90%',
                fontSize: 20,
                padding: 10,
                color: 'white',
                borderBottomWidth: 0.5,
                borderBottomColor: '#7d90a0',
              }}
              onChangeText={value => this.changeText(value)}
              onSubmitEditing={this.onSubmitEditing}
              onKeyPress={(keyPress) => console.log(keyPress)}
            />
            <IconAnt
              style={{ paddingTop: 10, color: '#ffffff' }}
              onPress={() => this.searchPlace()}
              name="search1"
              size={25}
            />
          </CardRow>
          {this.props.IsLoading ?
            <Spinner />
            : <FlatList
              data={this.props.Places}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  this.props.changeLocation(item.lat, item.lon, item.display_place,item.display_name);
                  this.props.navigation.navigate('CityOption')
                }
                }>
                  <Text style={{ fontSize: 20,color:'white',margin:10 }}>{item.display_name}</Text>
                  <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#000000' }} />
                </TouchableOpacity>

              )}
              keyExtractor={item => item.lat}
            />}
        </BackgoundImage>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { Places, IsLoading, err,locn } = state.search
  return { Places, IsLoading, err, locn }
}


export default connect(mapStateToProps, { searchResult, changeLocation })(AddCity)
//export default AddCity;
