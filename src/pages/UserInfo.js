import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  Image,
  View
} from 'react-native';

import Header from '../molecules/Header';

export default class UserInfo extends Component {

  constructor(){
    super();
    this.state = {
      name: "sam",
    }
  }

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Información" textSecondary={"de: " + this.state.name} />
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