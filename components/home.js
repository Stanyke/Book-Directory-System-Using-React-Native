import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import axios from 'axios'
import {styles} from '../assets/css/styles'
import trimCharacter from '../utils/trimCharacter'
import Header from './header'

class home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            books: [],
            refreshing: true,
            isReady: false,
        }
    }

    async fetchBooks(){
        let res = await axios.get('https://book-directory-system-api.herokuapp.com/api/books')
        await this.setState({books: res.data.books})
        this.setState({ refreshing: false });
    }

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchBooks() });
    }
    
    render() {
        let { navigation } = this.props

        if(this.state.books.length){
            return (
                <SafeAreaView style={styles.bookContainer}>
                    <Header title="Books" />
                    <FlatList
                        numColumns = {1}
                        keyExtractor = {(item) => item._id.toString()}
                        data = {this.state.books}
                        renderItem = {({item, index}) => (
                            <View style={(index === item.length - 1) ? styles.bookBodyWithoutBorder : styles.bookBodyWithBorder }>
                                <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                                    <Text style={styles.bookTitle}>{item.title}</Text>
                                    <View style={styles.bookDescAndImage}>
                                        <Image style={styles.bookCoverImage} source={{ uri: item.cover_image_url }} />
                                        <Text style={styles.bookDescription}>{trimCharacter(item.description)}...</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                        style={styles.bodyContent}
                    />
                </SafeAreaView>
            );
        }
        else{
            <View style={styles.loadingScreen}>
                <View style={styles.loadingScreen}>
                    <Bars size={50} color="#52AB42" />
                    <Text>Loading...</Text>
                </View>
            </View>
        }
        return (
            <AppLoading
                startAsync={() => this.fetchBooks()}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
            />
        );
    }
}

export default home;