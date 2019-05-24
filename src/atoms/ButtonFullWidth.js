import React, {Component} from 'react';
import {
  StyleSheet, 
  TouchableOpacity,
  Text
} from 'react-native';


export default class ButtonFullWidth extends Component {


  render() { 
    return ( 
      <TouchableOpacity 
      onPress={() => this.props.action()}
      style={styles.buttonFull}>
       <Text style={styles.buttonFullText}>{this.props.text}</Text>
      </TouchableOpacity>
     );
  }
}
 
const styles = StyleSheet.create({
  buttonFull: {
    elevation: 5,
    height: 60,
    backgroundColor: 'rgba(143, 100, 83, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  buttonFullText: {
    fontFamily: 'RobotoSlab',
    fontSize: 16,
    color: "aliceblue",
  },

});