import React, {Component} from 'react';
import {
  StyleSheet, 
  ImageBackground,
} from 'react-native';

import ReturnArrow from '../atoms/ReturnArrow';
import HeadeText from '../atoms/HeadersText';

export default class Header extends Component {

  render() { 
    return ( 
      <ImageBackground source={require("../img/backgroundHeader.jpg")}style={styles.container}>
        <ReturnArrow/>
        <HeadeText textPrimary={this.props.textPrimary} textSecondary={this.props.textSecondary} />
      </ImageBackground>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },

});