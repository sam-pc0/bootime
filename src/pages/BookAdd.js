import React, {Component} from 'react';
import { Actions } from "react-native-router-flux";
import {
  StyleSheet, 
  View,
  ToastAndroid
} from 'react-native';

import Header from '../organism/Header';
import InputDefault from '../atoms/InputDefault';
import ButtonFullWidth from '../atoms/ButtonFullWidth';
import { acPostBook } from "../api-client";

export default class ButtonAdd extends Component {


  constructor(){
    super();
    this.state = {
      id: "",
      title: "",
      author: "",
      year: "",
      gender: "",
      synopsis: "",
    }
    
  }

  inputValidate(){
    stt = this.state;
    if( stt.title  !== "" && stt.author   !== "" && stt.year !== "" &&
        stt.gender !== "" && stt.synopsis !== ""){
      return true;
    }else{
      return false;
    }
  }

  idGenerate(){
    return `_${Math.random().toString(36).substr(2, 9)}`
  }

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Agregar" textSecondary="libro" />
        <View style={styles.content}>

          <InputDefault 
            style={styles.input} iconName="book" placeholder="Título" 
             onChangeText={(title)=> { this.setState({title})}} />

          <InputDefault 
            style={styles.input} iconName="users"placeholder="Autor" 
            onChangeText={(author)=> { this.setState({author})}}/>
          
          <InputDefault 
            style={styles.input} iconName="table"placeholder="Año" 
            onChangeText={(year)=> { this.setState({year})}}/>
            
          <InputDefault 
            style={styles.input} iconName="gratipay"placeholder="Género" 
            onChangeText={(gender)=> { this.setState({gender})}}/>
          <InputDefault 
            style={styles.input} iconName="file"placeholder="Sinopsis" 
            onChangeText={(synopsis)=> { this.setState({synopsis})}}/>
        
        </View>
          <ButtonFullWidth style={styles.button} text="Confirmar" action={() => {
            if(this.inputValidate()){
              this.setState({id: this.idGenerate()})
              acPostBook(this.state)
              .then(value =>{
                if(value){
                  ToastAndroid.show("Libro agregado exitosamente, id:" +this.state.id, ToastAndroid.SHORT);
                  Actions.pop();
                }else{
                  alert("Hubo un error durante la transacción");
                }
              })
 
            }else{
              alert("Rellene todos los campos")
            }
          }}/>
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