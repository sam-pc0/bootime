import React, {Component} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InputDefault extends Component {

  constructor(...props){
    super(...props);
  }


  render() { 
    return ( 
      <View style={[styles.container, this.props.style]}>
        <Icon style={{padding: 10, color: 'rgba(255,255,255,0.6)'}} size={15} name={this.props.iconName}/>
        <TextInput
          style={{ flex: 1, color: 'aliceblue', fontFamily: "RobotoSlab"}}
          placeholder={this.props.placeholder}
          placeholderTextColor='rgba(255,255,255,0.6)'
          value={this.props.value}
          editable={this.props.editable}
          onChangeText={(text) => this.props.onChangeText(text)}
        />
      </View>
  
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    width: '65%',
    elevation: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'rgba(81,55,48,0.9)',
  },  

});