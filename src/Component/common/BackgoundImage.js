import React, { Component } from 'react';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

class BackgoundImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    ThemeType(theme) {
        switch (theme) {
            case 'Default':
                return require('../../bg.jpg');
            case 'Blue':
                return require('../../lightblue.jpg');
            case 'Red':
                return require('../../redbg.jpg');
            case 'Yellow':
                return require('../../yellowbg.jpg');
        }
    }

    render() {
        const theme = this.props.selTheme;
        console.log('THEME' ,theme);
        return (
            <ImageBackground 
                source={this.ThemeType(theme)} 
                style={styles.backgroundImage}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

function mapStateToProps(state) {
    const {selTheme} = state.search
    return {selTheme}
}

export default connect(mapStateToProps, { })(BackgoundImage)
//export default BackgoundImage;
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});