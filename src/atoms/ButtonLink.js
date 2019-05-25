import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  TouchableOpacity
} from 'react-native';

export default class ButtonLink extends Component {

  render() { 
    return ( 
      <TouchableOpacity onPress={() => this.props.action()}>
        <Text style={[styles.buttonLink, this.props.style]}>
        {this.props.text}
        </Text>
      </TouchableOpacity>
      
     );
  }
}
 
const styles = StyleSheet.create({
  buttonLink: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab',
  },
});