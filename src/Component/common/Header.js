import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { CardRow } from './CardRow';
import IconAnt from 'react-native-vector-icons/AntDesign';

const Header = (props) => {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    const { textStyles, viewStyles } = Styles
    return (
        <View style={viewStyles}>
            <CardRow>
            <Text style={textStyles}>{props.textHeader}</Text>
            <Menu
                ref={this.setMenuRef}
                button={<Text onPress={this.showMenu}>Show menu</Text>}
            >
                <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                    Menu item 3
          </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
            </Menu>
            </CardRow>
        </View>
       
  
    )
}

const Styles = StyleSheet.create({
    textStyles: {
        fontSize: 20
    },
    viewStyles: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 }


    }
})
export { Header };

