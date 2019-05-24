import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

export default class HeaderText extends Component {

  render() { 
    return ( 
        <View style={styles.containerText}>
          <Text style={styles.textPrimary}> {this.props.textPrimary} </Text>
          <Text style={styles.textSecondary}> {this.props.textSecondary} </Text>
        </View>
     );
  }
}
 
const styles = StyleSheet.create({
  containerText: {
    width: '80%',
  },
  textPrimary: {
    fontFamily: 'RobotoSlab',
    color: 'aliceblue',
    fontSize: 48,
  },
  textSecondary: {
    fontFamily: 'RobotoSlab',
    color: 'aliceblue',
    fontSize: 35,
    marginTop: -12,
    marginLeft: 4,
  },
});