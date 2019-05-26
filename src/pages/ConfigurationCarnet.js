import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  Image,
  View
} from 'react-native';

import Header from '../organism/Header';
import InputDefault from '../atoms/InputDefault';
import ButtonFullWidth from '../atoms/ButtonFullWidth';

export default class ConfigurationCarnet extends Component {

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Configurar" textSecondary="carnet" />
        <View style={styles.content}>
          <InputDefault style={styles.input}iconName="book"placeholder="Nombre" />
          <InputDefault style={styles.input}iconName="venus-mars"placeholder="Edad" />
          <InputDefault style={styles.input}iconName="table"placeholder="Sexo" />
          <InputDefault style={styles.input}iconName="users"placeholder="Dirección" />
          <InputDefault style={styles.input}iconName="file"placeholder="Email" />
          <InputDefault style={styles.input}iconName="file"placeholder="Profesión" />
        </View>
          <ButtonFullWidth action={() => alert("En construcción")}  style={styles.button} text="Confirmar"/>
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
  content: {
    marginTop: 175,
  },
  input: {
    marginBottom: 15,
  },
  button:{
    marginTop: -30
  }
});