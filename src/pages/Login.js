import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Dialog from "react-native-dialog";

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
import {acGetCarnetList, acGetUserDataByCarnet} from '../api-client';

export default class Login extends Component {

  constructor() {
    super();

    this.state = {
      carnet: "",
      promptVisible: false,
    };
  }

  carnetExist(carnet){

   return  acGetCarnetList()
    .then(carnets =>{
      for (let i = 0; i < carnets.length; i++) {
        const _carnet = carnets[i].Carnet;
        if(_carnet == carnet){
          this.setState={carnet: _carnet};
          return true;
        }
      }
      return false    
    }).catch(err => err)
    
  }


  render() {
    return (

    <ImageBackground 
    source={require('../img/background.jpg')} style={{ flex: 1 }}>

      <View style={styles.page}>
      
      {/* <Dialog.Container visible={this.state.promptVisible}>
          <Dialog.Title>Ingrese el código de boleta</Dialog.Title>
          <Dialog.Input placeholder="---" underlineColorAndroid="gray"/>
          <Dialog.Button label="Cancelar" onPress={ () => this.setState({promptVisible: false})} />
          <Dialog.Button label="Aceptar" onPress={() => {
            this.setState({promptVisible: false});
            Actions.ConfigurationCarnet();
          }} />
      </Dialog.Container> */}

        <Image style={styles.logo} source={require('../img/logoTransWhite.png')} />
        <View style={styles.sectionInput}>

          <InputDefault style={styles.input} placeholder="Carnet" iconName="id-card"
          onChangeText={(carnet)=> { this.setState({carnet})}}  />

          <View style={styles.inputSectionText}>
            <Text style={styles.text}>No has configurado tu carnet?  </Text>
            <ButtonLink text="Configurar"  action={() => Actions.ConfigurationCarnet()} />
          </View>
        </View>
        
        <ButtonFullWidth text="Ingresar" action={() => {
          let carnet = this.state.carnet;
          if( carnet != ""){
            this.carnetExist(carnet)
            .then(value =>{
              
              if(value){
                acGetUserDataByCarnet(this.state.carnet)
                .then(user =>{
                  Actions.Main({user: user})
                }).catch(err => alert(err))
                
              }else{ alert("No se ha encontrado el carnet")}
            })
            .catch(err => alert("error viejo"))
          }else{ alert("Ingresa el numero de carnet")}
          
        }}/>
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
