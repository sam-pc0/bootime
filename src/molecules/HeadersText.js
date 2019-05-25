import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import ButtonLink from '../atoms/ButtonLink';

export default class HeaderText extends Component {

  render() { 
    return ( 
        <View style={styles.containerText}>
          <Text style={styles.textPrimary}> {this.props.textPrimary} </Text>
          <Text style={styles.textSecondary}> {this.props.textSecondary} </Text>
          {this.props.textButtonLink != null ?
              <ButtonLink 
                style = {styles.buttonLink}
                text = { this.props.textButtonLink } 
                action = {this.props.actionButtonLink } 
              />
            : null } 
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
    marginLeft: -10,
  },
  textSecondary: {
    fontFamily: 'RobotoSlab',
    color: 'aliceblue',
    fontSize: 35,
    marginTop: -18,
    marginLeft: -10,
  },
  buttonLink:{
    marginTop: -7,
  },
});