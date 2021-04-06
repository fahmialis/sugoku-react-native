import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Finish(props) {
  const {name, difficulty}  = props.route.params
  return (
    <View>
      <Text>Congrats {name} you have finished SUGOKU on {difficulty.toUpperCase()}!!</Text>
      <Button 
        title='Play again'
        onPress={() => props.navigation.navigate('Home')}
        ></Button> 
    </View>
  )
}

const styles = StyleSheet.create({

});
