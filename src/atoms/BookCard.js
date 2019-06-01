import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View
} from 'react-native';

export default class BookCard extends Component {

  constructor(){
    super();

  }

  render() { 
    {this.state = this.props.book}
    return ( 
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <View style={styles.information}>
          <Text style={styles.title} >{this.state.Titulo}</Text>
          <View style={styles.facts}>
            <Text style={styles.fact} >por: {this.state.Autor}</Text>
            <Text style={styles.fact} >, {this.state.Anio}</Text>
            <Text style={styles.fact} >, {this.state.Genero}</Text>
          </View>
          
        </View>
        <View style={styles.synopsis}>
          <Text style={styles.synopsisText} >{this.state.Sinopsis}  </Text>
        </View>
      </TouchableOpacity>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'rgba(85,58,50,0.8)',
    elevation: 7,
  },
  information:{
    width: "65%",
    flexDirection: 'column',
    paddingLeft: 5,
  },
  facts:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fact: {
    fontFamily: 'RobotoSlab',
    color: "aliceblue"
  },
  synopsis:{
    width: "35%",
    flexDirection: 'column',
    padding: 2,
    paddingLeft: 5,
    borderLeftColor: 'rgba(142,99,82,0.5)',
    borderLeftWidth: 1,
  },
  synopsisText:{
    fontSize: 11,
    textAlign: "justify",
    fontFamily: 'RobotoSlab',
    color: "aliceblue"
  },
  title:{
    fontSize: 30,
    fontFamily: 'RobotoSlab',
    color: "aliceblue",
    fontWeight: 'bold',
  }
});
