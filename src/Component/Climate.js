import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Climate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    climateType(type) {
        switch (type) {
            case 'breeze':
                return require('../images/breeze.png');
            case 'clear-day':
                return require('../images/sunny-day.png');
            case 'clear-night':
                return require('../images/night.png');
            case 'rain':
                return require('../images/rainy-day.png');
            case 'snow':
                return require('../images/snow-cloud.png');
            case 'sleet':
                return require('../images/sleet.png');
            case 'wind':
                return require('../images/windy-day.png');
            case 'fog':
                return require('../images/foggy.png');
            case 'cloudy':
                return require('../images/cloudy-day.png');
            case 'partly-cloudy-day':
                return require('../images/partialy-cloudy.png');
            case 'partly-cloudy-night':
                return require('../images/dark-night.png');
            case 'thunderstorm':
                return require('../images/breeze.png');
        }
    }
    render() {
        size= this.props.size;
        var type = this.props.children;
        return (
            <View>
                <Image
                    style={{ width: size, height: size, paddingTop: 20 }}
                    source={this.climateType(type)}
                ></Image>
            </View>
        );
    }
}

export default Climate;
