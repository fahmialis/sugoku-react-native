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
    console.log(difficulty)
  }, [])

  return (
    <View>
      <Text>home</Text>
      <TextInput
      placeholder="enter your name"
      onChangeText={(value) => setName(value)}
      ></TextInput>

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