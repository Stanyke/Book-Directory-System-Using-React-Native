import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {styles} from '../assets/css/styles'

class header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
        )
    }
}

export default header;