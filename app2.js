import React, {useState} from 'react';
import { Button, SafeAreaView, StatusBar, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import {styles} from './assets/css/styles'
import Header from './components/header'

const keyGenerator = () =>  '_' + Math.random().toString(36).substr(2, 9)

export default function App() {
  const [person, setPerson] = useState("Stanley")
  const [people, setPeople] = useState([
    {name: 'jane', age: 20},
    {name: 'mary', age: 21},
    {name: 'henry', age: 27},
    {name: 'ken', age: 22},
    {name: 'lucy', age: 21},
    {name: 'billie', age: 19},
    {name: 'jane', age: 20},
    {name: 'mary', age: 21},
    {name: 'henry', age: 27},
    {name: 'ken', age: 22},
    {name: 'jane', age: 20},
    {name: 'mary', age: 21},
    {name: 'henry', age: 27},
    {name: 'ken', age: 22},
  ])

  const pressHandler = (id) => {
    console.log(id)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" barStyle= 'default' showHideTransition='fade' hidden={false} translucent={false}  />
        
      <Header title="Todo" />
      <View style={styles.mainContent}>
        <Text>Hello {person}</Text>
        <TextInput style={styles.input} placeholder="John Doe" onChangeText={(e) => setPerson(e)} />
        {/* <TextInput style={styles.input} placeholder="John Doe" onPressIn={(e) => setPerson(e)} /> */}

        <FlatList
          numColumns = {2}
          keyExtractor = {(item) => keyGenerator()}
          data = {people}
          renderItem = {({item, index}) => (
            <TouchableOpacity onPress={() => pressHandler(index)}>
              <Text style={styles.list}>{item.name} ({item.age})</Text>
            </TouchableOpacity>
          )}
        />

        <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Profile')} />
      
        {/* <ScrollView>
            {people.map((oneBody, idx) => {
              return(
                <View>
                  <Text key={oneBody.idx} style={styles.list}>{oneBody.name} ({oneBody.age})</Text>
                </View>
              )}
            )}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}