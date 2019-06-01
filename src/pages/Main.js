import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  ImageBackground,
  BackHandler,
  ToastAndroid,
  View
} from 'react-native';

import HeaderMain from '../organism/HeaderMain';
import BookLibrary from '../organism/BookLibrary';
import {bookList} from '../api-client';
import ButtonFullWidth from '../atoms/ButtonFullWidth';
import { Actions } from 'react-native-router-flux';
import { acGetBookList } from "../api-client";
export default class ConfigurationCarnet extends Component {


  constructor(props){
    super(props);

    this.state={
      carnet: props.user.Carnet,
      name: props.user.Nombre,
      age: props.user.Edad,
      gender: props.user.Sexo ,
      address:props.user.Direccion,
      email: props.user.Email,
      bookList: bookList,
    }

  }

  
  //block the return key
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      ToastAndroid.show('Cierra Cesión para regresar', ToastAndroid.CENTER);
      return true;
  }

  render() { 
    return ( 
      <ImageBackground 
      source={require('../img/background.jpg')} style={{ flex: 1 }}>
        <View style={styles.page}>
          <HeaderMain user={this.state}  textPrimary="Libros" textSecondary={"de: " + this.state.name} />
          <View style={styles.content}>
            <BookLibrary bookList={this.state.bookList}>

            </BookLibrary>
            <ButtonFullWidth action={() =>{
              acGetBookList()
              .then(books=> {
                Actions.AllBooks({books: books})
              })
              
              }} style={styles.botonLibros} text="Mostrat todos los libros"/>
          </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 165,
  },
  botonLibros:{
    marginTop: 40,
  }
});