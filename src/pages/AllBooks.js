import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';

import BookCard from "../atoms/BookCard";
import RetunArrow from "../atoms/ReturnArrow";

export default class AllBooks extends Component {
  constructor(props){
    super(props);

    this.state = {
      bookList : props.books,
    }

  }

  getBookCards(){
    let books = this.state.bookList;
    let returned = [];
    books.forEach(book => {
      if( book.Titulo.length > 25){
        book.Titulo =book.Titulo.substr(0,21)+"...";
      }
      returned.push(
        <BookCard style={styles.bookCard} book={book}> </BookCard>
      );
    });
    return returned;
  }

  render() { 

    return ( 
      <ImageBackground 
      source={require('../img/background.jpg')} style={{ flex: 1 }}>
        <RetunArrow></RetunArrow>
        <ScrollView style={styles.sv}>
          <View style={styles.innerContainer}>
            {this.getBookCards()}
          </View>
        </ScrollView>
      </ImageBackground>
     );
  }
}
 
const styles = StyleSheet.create({

  sv: {
    width: '100%',
    marginTop: 30,
  },
  innerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 11,
  },
  bookCard: {
    marginBottom: 10,
  }
});
