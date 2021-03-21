import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import {styles} from '../assets/css/styles'

class reviewDetails extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
          navigation: this.props.navigation,
          book: this.props.route.params
      }
    }
    
    render() {
        return (
            <View style={styles.bookContainer}>
              <Text style={styles.bookTitle}>{this.state.book.title}</Text>
              <Text>{this.state.book.description}</Text>
              <Image source={{ uri: this.state.book.cover_image_url }} />
            </View>
        );
    }
}

export default reviewDetails;