import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddSetting from '../Component/SettingComponent';
import BackgoundImage from '../Component/common/BackgoundImage';
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <BackgoundImage>
                    <AddSetting title='Language' onPress={()=> this.props.navigation.navigate('notification')}/>
                    <AddSetting title='Unit' onPress={()=> this.props.navigation.navigate('notification')}/>
                    <AddSetting title='Time Machine' onPress={()=> this.props.navigation.navigate('notification')}/>
                </BackgoundImage>
            </View>
        );
    }
}

export default Setting;
