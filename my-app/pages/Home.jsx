import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const difficultyLevel = [
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Hard",
    value: "hard",
  },
]

export default function Home(props) {
  const [difficulty, setDifficulty] = useState('easy')
  const [name, setName] = useState('')

  useEffect(() => {
    // console.log(difficulty, name)
  }, [])

  return (
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:70, marginBottom: 30}}>SUGOKU</Text>
      <Text style={{fontSize:20, marginBottom: 10}}>Name</Text>
      <TextInput
      placeholder="enter your name"
      onChangeText={(value) => setName(value)}
      style={{borderWidth:1, width: 200, height: 50, marginBottom: 30}}
      ></TextInput>

      <Text style={{fontSize:20, marginBottom: 10}}>Choose difficulty level</Text>
      <DropDownPicker
          items={difficultyLevel}
          defaultValue={difficulty}
          containerStyle={{ height: 50, width: 250 }}
          style={{ backgroundColor: "transparent", fontSize: 20 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setDifficulty(item.value)}
        />
      <Button
      title="play"
      onPress={() => props.navigation.navigate('Game', {name, difficulty})}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({

});