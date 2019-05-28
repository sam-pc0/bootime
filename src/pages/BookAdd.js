import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  Image,
  TextInput,
  View
} from 'react-native';

import Header from '../organism/Header';
import InputDefault from '../atoms/InputDefault';
import ButtonFullWidth from '../atoms/ButtonFullWidth';

export default class ButtonAdd extends Component {


  constructor(){
    super();
    this.state = {
      title: " ",
      author: "",
      year: "",
      gender: "",
      synopsis: "",
    }
    
  }

  proofHandler(author){
    this.setState({author})
  }

  render() { 
    return ( 
      <View style={styles.page}>
        <Header textPrimary="Agregar" textSecondary="libro" />
        <View style={styles.content}>

          <InputDefault 
            style={styles.input} iconName="book" placeholder="Título" 
             onChangeText={(title)=> { this.setState({title})}} l=""/>

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
             let book = JSON.stringify({
              title: this.state.title,
              author: this.state.author,
              year: this.state.year,
              gender: this.state.gender,
              synopsis: this.state.synopsis,
            });
            alert(book)} 
            
            } />
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