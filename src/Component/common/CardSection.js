import React from 'react';
import { View ,StyleSheet} from 'react-native';

const CardSection = (props) => {
    const {container}=Styles
    return(
    <View style={[container,props.style]}>
      {props.children}
    </View>
);
}

export { CardSection } ;


const Styles=StyleSheet.create({
    container:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'white',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'black',
        position:'relative'

    }
})
