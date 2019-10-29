import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  textLink: {
    fontSize: 20,
    color: 'blue'
  },
  // Seven days
  Text: {
    fontSize: 30,
  },
  text10: {
    fontSize: 20,
  },
  center:{
    alignItems:'center',
    justifyContent:'center'
  },
  //PARTITIONS
  partition:{
    height:2,
    width:'100%',
    backgroundColor:'black',
    //margin:5
  },
  DropdownPartition:{
    height:2,
    width:'100%',
    backgroundColor:'black',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    marginTop: 5, 
    marginBottom: 2
  },
  button: {
    width:'50%',
    height:50,
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 1)',
    padding: 10,
    borderColor:'black',
    borderBottomEndRadius:10,
    borderRadius:10
  },
  //CityOption
  whiteHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  //setting selected display
  settingDisplay:{
    color:'rgba(255,255,255, 0.3)',
    fontWeight:'bold',
    fontSize:15,
    paddingBottom:10
  },
  //STyleoption
  unitoption:{
    color:'white',
    fontWeight:'bold',
    fontSize:17,
    margin:10,
    paddingLeft:10
  }

})
export default style;