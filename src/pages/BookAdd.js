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

export default class ButtonAdd extends Component {

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Agregar" textSecondary="libro" />
        <View style={styles.content}>
          <InputDefault style={styles.input}iconName="book"placeholder="Título" />
          <InputDefault style={styles.input}iconName="venus-mars"placeholder="Género" />
          <InputDefault style={styles.input}iconName="table"placeholder="Año" />
          <InputDefault style={styles.input}iconName="users"placeholder="Autor" />
          <InputDefault style={styles.input}iconName="file"placeholder="Sinopsis" />
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