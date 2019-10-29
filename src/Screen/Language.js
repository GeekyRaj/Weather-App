import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from '../Component/common';
import style from '../Style/Style';
import BackgoundImage from '../Component/common/BackgoundImage';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../data/lang';
import { connect } from 'react-redux';
import { change_lang} from '../Redux/actions';

class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(data)
        return (
            <View style={{ flex: 1 }}>
                <BackgoundImage>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress ={()=> {this.props.navigation.navigate('setting'),this.props.change_lang(item.key,item.value)}}>
                                    <Card width='90%' height='auto'>
                                        <View style={{ margin: 6, alignItems: 'flex-start' }}>
                                            <Text style={[style.whiteHeader, { paddingLeft: 40 }]}>{item.value}</Text>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => `${index}${item.place}`}
                    />

                </BackgoundImage>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { selLang } = state.search
    return { selLang }
}

export default connect(mapStateToProps, { change_lang })(Language)
