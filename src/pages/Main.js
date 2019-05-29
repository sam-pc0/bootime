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
import {acGetUserDataByCarnet} from '../api-client';

export default class ConfigurationCarnet extends Component {


  constructor(props){
    super(props);

    this.getUserData(props.carnet);
  }

  getUserData(carnet){
    let user = acGetUserDataByCarnet(carnet);
    this.state={
      carnet: user.carnet,
      name:  user.name,
      age: user.age,
      gender: user.gender ,
      address: user.address,
      email: user.email,
      bookList: user.bookList,
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
  }
});