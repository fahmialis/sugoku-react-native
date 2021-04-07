import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>SUGOKU</Text>
      <Text style={styles.name_title}>Name</Text>
      <TextInput
      placeholder="enter your name"
      onChangeText={(value) => setName(value)}
      style={styles.name_input}
      ></TextInput>

      <Text style={styles.difficulty_title}>Choose difficulty level</Text>
      <DropDownPicker
          items={difficultyLevel}
          defaultValue={difficulty}
          containerStyle={{ height: 50, width: 250 }}
          style={{ backgroundColor: "white", fontSize: 20, marginBottom:10 }}
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
  container: {
    flex: 1,
    alignItems:'center', 
    backgroundColor: 'lightblue'
  },
  title : {
    fontSize:70, 
    marginBottom: 30,
    marginTop: 50,
    color: 'white'
  },
  name_title: {
    fontSize:20, 
    marginBottom: 20
  },
  name_input: {
    borderWidth:1, 
    width: 200, 
    height: 50, 
    marginBottom: 30, 
    borderColor:'white', 
    backgroundColor: 'white', 
    paddingLeft: 10
  },
  difficulty_title: {
    fontSize:20, 
    marginBottom: 20
  }
});