import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Dialog from 'react-native-dialog';

import {
  StyleSheet, 
  Text, 
  View,
  ToastAndroid,
} from 'react-native';

import Header from '../organism/Header';
import InputDefault from "../atoms/InputDefault";

export default class UserInfo extends Component {

  constructor(props){
    super(props);
   
    this.state={
      carnet: props.user.carnet,
      name: props.user.name,
      age: props.user.age,
      gender: props.user.gender,
      address: props.user.address,
      email: props.user.email,
    }
  }

  render() { 
    return ( 
      <View style={styles.page}>
      {/* //   <Dialog.Container visible={this.state.promptVisible}>
      //     <Dialog.Title>Account delete</Dialog.Title>
      //     <Dialog.Description>
      //       Seguro que quieres cerrar cesión?
      //     </Dialog.Description>
      //     <Dialog.Button label="Cancelar" onPress={()=> this.setState({promptVisible: true})} />
      //     <Dialog.Button label="Seguro" onPress={()=> Actions.reset('Login')} />
      //   </Dialog.Container> */}
  
        <Header
          textPrimary="Información"
          textSecondary={"de: " + this.state.name}
          textButtonLink="Cerrar Cesión"
          actionButtonLink={() => {
            ToastAndroid.show("Cesion cerrada", ToastAndroid.SHORT)
             Actions.reset('Login')
            }
          }
        />

        <View style={styles.content}>
          
          <Text style={styles.label}> Carnet </Text>
          <InputDefault 
            style={styles.input} value={this.state.carnet} iconName="id-card"placeholder="Carnet" editable={false} 
            onChangeText={(name)=> { this.setState({name})}} />

          <Text style={styles.label}> Edad </Text>          
          <InputDefault
            style={styles.input} value={this.state.age} 
            iconName="table"placeholder="Edad" editable={false}
            onChangeText={(age)=> { this.setState({age})}}  />

          <Text style={styles.label}> Sexo </Text>
          <InputDefault 
            style={styles.input} value={this.state.gender} 
            iconName="venus-mars"placeholder="Sexo" editable={false}
            onChangeText={(gender)=> { this.setState({gender})}}  />

          <Text style={styles.label}> Dirección</Text>
          <InputDefault
            style={styles.input} value={this.state.address} 
            iconName="map"placeholder="Dirección" editable={false}
            onChangeText={(address)=> { this.setState({address})}}  />

          <Text style={styles.label}> Email </Text>
          <InputDefault 
            style={styles.input} value={this.state.email} 
            iconName="envelope"placeholder="Email" editable={false}
            onChangeText={(email)=> { this.setState({email})}}  />

        </View>
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
  },content: {
    marginTop: 115,
  },
  input: {
    marginBottom: 10,

  },
  label:{
    color: 'aliceblue',
    fontWeight: 'bold',
  }
});