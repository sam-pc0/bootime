import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
} from 'react-native';

export default class ButtonLink extends Component {

  render() { 
    return ( 
      <Text style={styles.buttonLink}>
        {this.props.text}
      </Text>
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