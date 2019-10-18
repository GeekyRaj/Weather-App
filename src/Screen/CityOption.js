import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from '../Component/common';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../Style/Style';
import BackgoundImage from '../Component/common/BackgoundImage';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

class CityOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        console.log('CITY OPTION ', this.props.locn);
        const locn = this.props.locn;
        return (
            <View style={{ flex: 1 }}>
                <BackgoundImage>
                    {locn != '' ?
                        <FlatList
                            data={locn}
                            renderItem={({ item }) =>
                                <Card width='90%' height={100}>
                                    <View style={{ margin:10}}> 
                                        <Text style={style.whiteHeader}>{item.place}</Text>
                                        <Text style={style.whiteHeader}>{item.addr}</Text>
                                    </View>
                                </Card>
                            }
                            keyExtractor={item => item.place}
                        /> : <View style={[style.center,{margin:20}]}><Text style={[style.whiteHeader,{fontSize: 20}]}>No City added</Text></View>}
                    
                    <View style={{ position:'absolute', bottom:0,paddingLeft:290, height:80, flex:1}}>
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
                </BackgoundImage>
            </View>
        );
    }
}
function mapStateToProps(state) {
    const { locn } = state.search
    return { locn }
}


export default connect(mapStateToProps, {})(CityOption)

