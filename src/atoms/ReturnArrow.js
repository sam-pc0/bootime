import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';


export default class RaturnArrow extends Component {

  render() { 
    return ( 
      <TouchableOpacity style={styles.touchable} onPress={() => Actions.pop()} >
        <Icon style={styles.arrow} size={22} name='arrow-left'/>
      </TouchableOpacity>
     );
  }
}
 
const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
    top: 6, left: 6,
  },
  arrow: {
    color: 'white',
    fontWeight: 'normal',
  },
});