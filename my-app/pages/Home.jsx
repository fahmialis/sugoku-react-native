import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Home(props) {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>home</Text>
      <TextInput
      placeholder="enter your name"
      onSubmitEditing = {(value) => {
        // console.log(value);
        setName(value)
        console.log(name, 'name baru');
      } }
      ></TextInput>
      <View style={styles.button}>
        <Button title="easy"></Button>
        <Button title="medium"></Button>
        <Button title="hard"></Button>
      </View>
      <Button 
      title="play"
      onPress={() => props.navigation.navigate('Game', name)}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({

});