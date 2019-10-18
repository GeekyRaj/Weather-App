import React, { Component } from 'react';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';

class BackgoundImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('./bg.jpg')} style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default BackgoundImage;
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});