import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Dialog from 'react-native-dialog';

import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import Header from '../organism/Header';


export default class UserInfo extends Component {

  constructor(){
    super();
    this.handler = this.handler.bind(this);
    this.state = {
      name: "Sam",
      promptVisible: false,
    }
  }

  handler(){
    this.setState({promptVisible: true})
  }
  render() { 
    return ( 
      <View style={styles.page}>
        {/* <Dialog.Container visible={this.state.promptVisible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Seguro que quieres cerrar cesión?
          </Dialog.Description>
          <Dialog.Button label="Cancelar" onPress={()=> this.setState({promptVisible: false})} />
          <Dialog.Button label="Seguro" onPress={()=> Actions.reset('Login')} />
        </Dialog.Container> */}
  
        <Header
          textPrimary="Información"
          textSecondary={"de: " + this.state.name}
          textButtonLink="Cerrar Cesión"
          actionButtonLink={()=> Actions.reset('Login')}
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
});