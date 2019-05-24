import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  Image,
  View
} from 'react-native';

import Header from '../molecules/Header';

export default class ButtonAdd extends Component {

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Agregar" textSecondary="libro" />
      </View>
     );
  }
}
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#543830',
  },
});