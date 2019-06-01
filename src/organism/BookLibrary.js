import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  Image,
  ScrollView,
  View,
} from 'react-native';

import BookCard from "../atoms/BookCard";


export default class BookLibrary extends Component {
  constructor(){
    super();

    this.state = {
      bookList : [],
    }

  }

  getBookCards(){
    let books = this.props.bookList;
    let returned = [];
    books.forEach(book => {
      if( book.Titulo.length > 10){
        book.Titulo =book.Titulo.substr(0,26)+"...";
      }
      returned.push(
        <BookCard style={styles.bookCard} book={book}> </BookCard>
      );
    });
    return returned;
  }

  render() { 

    return ( 
      <View style={styles.container}>
        <ScrollView style={styles.sv}>
          <View style={styles.innerContainer}>
            {this.getBookCards()}
          </View>
        </ScrollView>
      </View>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 350,
    elevation: 12,
  },
  sv: {
    width: '100%',
    backgroundColor: 'rgba(142,99,82,0.8)',
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
