import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Dialog from "react-native-dialog";

import {
  StyleSheet, 
  ImageBackground, 
  Text, 
  TextInput,
  Image,
  View
} from 'react-native';


import ButtonFullWidth from '../atoms/ButtonFullWidth';
import ButtonLink from '../atoms/ButtonLink';
import InputDefault from '../atoms/InputDefault';

export default class Login extends Component {

  constructor(...props) {
    super(...props);
    this.state = {
      carnet: '',
      promptVisible: false,
    };
  }

 
  render() {
    return (

    <ImageBackground 
    source={require('../img/background.jpg')} style={{ flex: 1 }}>

      <View style={styles.page}>
      
      <Dialog.Container visible={this.state.promptVisible}>
          <Dialog.Title>Ingrese el código de boleta</Dialog.Title>
          <Dialog.Input placeholder="---" underlineColorAndroid="gray"/>
          <Dialog.Button label="Cancelar" onPress={ () => this.setState({promptVisible: false})} />
          <Dialog.Button label="Aceptar" onPress={() => {
            this.setState({promptVisible: false});
            Actions.ConfigurationCarnet();
          }} />
      </Dialog.Container>

        <Image style={styles.logo} source={require('../img/logoTransWhite.png')} />
        <View style={styles.sectionInput}>
          <InputDefault style={styles.input} iconName="id-card" placeholder="Carnet" />
          <View style={styles.inputSectionText}>
            <Text style={styles.text}>No has configurado tu carnet?  </Text>

            <ButtonLink text="Configurar"  action={() => this.setState({ promptVisible: true })} />
          </View>
        </View>
        
        <ButtonFullWidth text="Ingresar" action={() => Actions.Main()}/>
        <ButtonLink text='Agreagar libro a la libreria' action={ () => Actions.BookAdd()}/> 
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
