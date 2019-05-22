import React, {Component} from 'react';
import {
  StyleSheet, 
  ImageBackground, 
  Text, 
  Image,
  View
} from 'react-native';

import ButtonFullWidth from '../atoms/ButtonFullWidth';
import ButtonLink from '../atoms/ButtonLink';
import InputDefault from '../atoms/InputDefault';

export default class Login extends Component {
  render() {
    return (

    <ImageBackground 
    source={require('../img/backgroundLogin.jpg')} style={{ flex: 1 }}>

      <View style={styles.page}>
        <Image style={styles.logo} source={require('../img/logoTransWhite.png')} />
        <View style={styles.sectionInput}>
          <InputDefault style={styles.input} iconName="id-card" placeholder="Carnet" />
          <View style={styles.inputSectionText}>
            <Text style={styles.text}>No has configurado tu carnet?  </Text>
            <ButtonLink text="Configurar"/>
          </View>
        </View>
        
        <ButtonFullWidth text="Ingresar" />
        <ButtonLink text='Agreagar libro a la libreria'/> 
      </View>

    </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text:{
    fontFamily: "RobotoSlab",
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  logo:{
    width: 180,
    height: 170,
    marginTop: 20,
  },
  sectionInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  inputSectionText: {
    flexDirection:'row',
    marginTop: 8,
    justifyContent: 'center',
  },
 
});
