import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddSetting from '../Component/SettingComponent';
import BackgoundImage from '../Component/common/BackgoundImage';
import { connect } from 'react-redux';
import { Card } from '../Component/common';
import style from '../Style/Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { change_unit } from '../Redux/actions';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitVisible: false,
        };
    }

    toggleList(){
        this.setState(prevState => ({
          unitVisible: !prevState.unitVisible
        }))
        console.log('ytruguh');
      }

    render() {
        console.log(this.props.selLangDisp)
        return (
            <View style={{ flex: 1 }}>
                <BackgoundImage>
                    <AddSetting title='Language' show={this.props.selLangDisp} onPress={()=> this.props.navigation.navigate('language')}/>
                    <AddSetting title='Unit' show={this.props.selUnitDisp} onPress={ ()=> this.toggleList()}/>
                    {this.state.unitVisible?
                    <Card height='auto' width='90%'>
                        <TouchableOpacity onPress={ ()=> {this.props.change_unit('auto', 'Auto'), this.toggleList()}}>
                            <Text style={style.unitoption}>Auto</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_unit('ca', 'CA'), this.toggleList()}}>
                            <Text style={style.unitoption}>CA</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_unit('uk2', 'UK2'), this.toggleList()}}>
                            <Text style={style.unitoption}>UK2</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_unit('us', 'US'), this.toggleList()}}>
                            <Text style={style.unitoption}>US</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_unit('si', 'SI'), this.toggleList()}}>
                            <Text style={style.unitoption}>SI</Text>
                        </TouchableOpacity>
                    </Card>
                    :
                    
                    <Text></Text>
                    }
                    <AddSetting title='Time Machine' onPress={()=> { this.props.navigation.navigate('TimeMachine')}}/>

                </BackgoundImage>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { selLang ,selLangDisp, selUnit, selUnitDisp} = state.search
    return { selLang, selLangDisp,selUnit, selUnitDisp }
}

export default connect(mapStateToProps, { change_unit })(Setting)

