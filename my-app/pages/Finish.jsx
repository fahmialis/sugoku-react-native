import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Finish(props) {
  const {name, difficulty}  = props.route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congrats, {name ? name : 'anon'} you have finished SUGOKU on {difficulty.toUpperCase()}!!</Text>
      <Button 
        title='Play again'
        onPress={() => props.navigation.navigate('Home')}
        ></Button> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue', 
    height: 1000
  },
  title: {
    fontSize:45, 
    textAlign:'center', 
    marginBottom:50, 
    marginTop: 100, 
    marginHorizontal:30,
    color: 'white'
  }

});
