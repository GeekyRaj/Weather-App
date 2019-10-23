import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardRow, Button } from '../Component/common';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../Style/Style';
import BackgoundImage from '../Component/common/BackgoundImage';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Climate from '../Component/Climate';
import { resetSearch, updateOption, city_status } from '../Redux/actions';
import Temp from '../Component/Temp';
import City from '../Component/City';
import IconEn from 'react-native-vector-icons/Entypo';


class CityOption extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft:
                (<Icon
                    style={{ paddingLeft: 16, color: '#ffffff' }}
                    onPress={() => navigation.pop()}
                    name="left"
                    size={25}
                />),
        };
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        console.disableYellowBox = true;
        console.log('CITY OPTION ', this.props.locn);
        const locn = Object.values(this.props.locn);
        console.log('OBJECT TO ARRAY', locn);
        console.log(this.props.geotLong)
        return (
            <View style={{ flex: 1 }}>
                <BackgoundImage>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('one', { lat:this.props.geoLat, long: this.props.geoLong }), this.props.city_status(true,lat=this.props.geoLat, long= this.props.geotLong)}}> 
                    <Card width='90%' height='auto'>
                        <View style={{ margin: 10, }}>
                            <CardRow>
                                <View style={{ flex:1}}>
                                    <IconEn
                                        style={{ color: 'white' }}
                                        name="location"
                                        size={25}
                                    />
                                </View>
                                <View style={{ flex:3}}> 
                                    <Text style={style.whiteHeader}>{this.props.geoPlace}</Text>
                                </View>
                            </CardRow>
                        </View>
                    </Card>
                    </TouchableOpacity>

                    {locn != '' ?
                        <FlatList
                            data={locn}
                            extraData={locn}
                            renderItem={({ item, index }) => {
                                //this.props.updateOption( index ,item.lat,item.long,item.place,item.addr,item.placedata);
                                console.log('Test', item.place, item.addr)
                                return (
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('one', { lat: item.lat, long:item.long }), this.props.city_status(false, lat=item.lat, long=item.long)}}>
                                        <City data={item}></City>
                                    </TouchableOpacity>
                                    // {/* <Text>{item.placedata.currently.humidity}</Text> */}
                                    // <TouchableOpacity onPress={()=> {
                                    //     this.props.navigation.navigate('one');
                                    //     this.props.updateOption( index,item.lat,item.long,item.placedata);
                                    // }}> 
                                    //     <Text>{item.place}</Text>
                                    // </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item, index )=> `${index}${item.place}`}
                        />
                        // <React.Fragment>
                        // <Text>ui</Text>
                        // <Text>{locn[0].placedata.timezone}</Text>
                        // </React.Fragment>
                        : <View style={[style.center, { margin: 20 }]}><Text style={[style.whiteHeader, { fontSize: 20 }]}>No City added</Text></View>}

                    <View style={{ position: 'absolute', bottom: 0, paddingLeft: 290, height: 80, flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 50,
                                backgroundColor: '#fff',
                                borderRadius: 100,
                            }}
                            onPress={() => this.props.navigation.navigate('AddCity')}
                        >
                            <Icon
                                style={{ color: '#000000' }}
                                onPress={() => this.props.navigation.navigate('AddCity')}
                                name="plus"
                                size={45}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.props.resetSearch()}>
                        <Text>RESET</Text>
                    </TouchableOpacity>
                </BackgoundImage>
            </View>
        );
    }
}
function mapStateToProps(state) {
    const { locn, geoPlace, geoLat, geotLong } = state.search
    return { locn, geoPlace, geoLat, geotLong  }
}


export default connect(mapStateToProps, { resetSearch, updateOption, city_status })(CityOption)

