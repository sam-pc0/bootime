import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet, 
  ToastAndroid,
  View
} from 'react-native';

import Header from '../organism/Header';
import InputDefault from '../atoms/InputDefault';
import ButtonFullWidth from '../atoms/ButtonFullWidth';
import { acPostUser } from "../api-client";




export default class ConfigurationCarnet extends Component {

  constructor(){
    super();

    this.state={
      carnet: "",
      name: "",
      age: "",
      gender: "",
      address: '',
      email: '',
    }
  }

  carnetGenerate(){
      return `0905${(Math.random() * 100).toString().substr(2, 8)}`
  }

  inputValidate(){
    stt = this.state;
    if( stt.name    !== "" && stt.age   !== "" && stt.gender !== "" &&
        stt.address !== "" && stt.email !== ""){
      return true;
    }else{
      return false;
    }
  }

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Configurar" textSecondary="carnet" />
        <View style={styles.content}>
          <InputDefault 
          style={styles.input} iconName="user"placeholder="Nombre" 
          onChangeText={(name)=> { this.setState({name})}} />

          <InputDefault
          style={styles.input} iconName="table"placeholder="Edad"
          onChangeText={(age)=> { this.setState({age})}}  />

          <InputDefault 
          style={styles.input} iconName="venus-mars"placeholder="Sexo"
          onChangeText={(gender)=> { this.setState({gender})}}  />

          <InputDefault
          style={styles.input} iconName="map"placeholder="Dirección"
          onChangeText={(address)=> { this.setState({address})}}  />

          <InputDefault 
          style={styles.input} iconName="envelope"placeholder="Email"
          onChangeText={(email)=> { this.setState({email})}}  />

        </View>
          < ButtonFullWidth style = {
            styles.button
          }
          text = "Confirmar"
          action = {
            () => {
              if (this.inputValidate()) {
                this.setState({
                  carnet: this.carnetGenerate()
                })
                acPostUser(this.state)
                  .then(value => {
                    if (value) {
                      ToastAndroid.show("Tu carnet es: " + this.state.carnet, ToastAndroid.LONG);
                      Actions.pop();
                    } else {
                      alert("Error de servidor")
                    }
                  });
              }else{alert("Debes rellenar todos los campos")}
            }
          }
          />
                   
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