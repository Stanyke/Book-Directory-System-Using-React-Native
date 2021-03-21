import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/home'
import reviewScreen from './components/review'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#C70039" barStyle= 'default' showHideTransition='fade' hidden={false} translucent={false}  />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Review" component={reviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
