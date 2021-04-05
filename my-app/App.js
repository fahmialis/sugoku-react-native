import React,{ useState, useEffect } from 'react';
import GamePage from './pages/GamePage'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <GamePage></GamePage>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch'
  }
});
