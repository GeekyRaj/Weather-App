import React, { Component } from 'react';
import { View, Text ,TouchableOpacity } from 'react-native';
import AddSetting from '../Component/SettingComponent';
import BackgoundImage from '../Component/common/BackgoundImage';
import { connect } from 'react-redux';
import { Card } from '../Component/common';
import style from '../Style/Style';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { change_unit, change_theme } from '../Redux/actions';

class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft:
                (<IconAnt
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
            unitVisible: false,
            themeVisible: false,
        };
    }

    toggleList(){
        this.setState(prevState => ({
          unitVisible: !prevState.unitVisible
        }))
      }

    toggleTheme(){
    this.setState(prevState => ({
        themeVisible: !prevState.themeVisible
        }))
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
                    {/* <AddSetting title='Time Machine' onPress={()=> { this.props.navigation.navigate('TimeMachine')}}/> */}
                    <AddSetting title='Theme' show={this.props.selTheme} onPress={ ()=> this.toggleTheme()}/>
                    {this.state.themeVisible?
                    <Card height='auto' width='90%'>
                        <TouchableOpacity onPress={ ()=> {this.props.change_theme('Default'), this.toggleTheme()}}>
                            <Text style={style.unitoption}>Default</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_theme('Blue'), this.toggleTheme()}}>
                            <Text style={style.unitoption}>Blue</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_theme('Red'), this.toggleTheme()}}>
                            <Text style={style.unitoption}>Red</Text>
                        </TouchableOpacity>
                        <View style={style.DropdownPartition}></View>
                        <TouchableOpacity onPress={ ()=> {this.props.change_theme('Yellow'), this.toggleTheme()}}>
                            <Text style={style.unitoption}>Yellow</Text>
                        </TouchableOpacity>
                    </Card>
                    :
                    <Text></Text>
                    }
                </BackgoundImage>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { selLang ,selLangDisp, selUnit, selUnitDisp,selTheme} = state.search
    return { selLang, selLangDisp,selUnit, selUnitDisp , selTheme}
}

export default connect(mapStateToProps, { change_unit, change_theme })(Setting)

