import React,{ useState, useEffect } from 'react';
import GamePage from './pages/GamePage'
import Finish from './pages/Finish'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={GamePage} />
      <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
{/* 
    <View style={styles.container}>

      <GamePage></GamePage>

    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch'
  }
});
