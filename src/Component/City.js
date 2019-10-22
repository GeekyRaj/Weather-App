import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, CardRow, } from './common';
import style from '../Style/Style';
import Temp from './Temp';
import Climate from './Climate';
import IconEn from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const item = this.props.data;
        return (
            <View>
                <Card width='90%' height='auto'>
                    <View style={{ margin: 10, flex: 1 }}>
                        <CardRow>
                            <View style={{ flex: 4 }}>
                                <Text style={style.whiteHeader}>{item.place}</Text>
                            </View>
                            <View style={[style.center, { flex: 2 }]}>
                                <Climate size={35}>{item.placedata.currently.icon}</Climate>
                            </View>
                            <View style={{ flex: 3 }}>
                                <Temp fontSize={30} color={'white'}>{item.placedata.currently.temperature}</Temp>
                            </View>
                        </CardRow>
                        <View style={[style.partition, { backgroundColor: 'rgba(255,255,255, 0.3)', marginTop: 18, marginBottom: 5 }]}></View>
                        <CardRow>
                            <View style={{ flex: 2 }}>
                                <Text style={{ color: 'white' }}>Humidity {item.placedata.currently.humidity} % |  {item.placedata.currently.windSpeed} km/h</Text>
                            </View>
                            <View STYLE={{ FLEX: 1 }}>

                                <CardRow>
                                    <TouchableOpacity
                                        style={{ paddingRight: 10, }}
                                    //onPress={() => this.props.updateOption( index ,item.lat,item.long,item.place,item.addr,item.placedata)}
                                    >
                                        <IconEn
                                            style={{ color: 'white' }}
                                            name="ccw"
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => console.log('Delete pressed')}>
                                        <Icon
                                            style={{ color: 'rgba(255, 0, 0, 0.6)' }}
                                            name="delete"
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </CardRow>

                            </View>
                        </CardRow>
                    </View>
                </Card>
            </View>
        );
    }
}

export default City;
