import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function BoardInput({initialValue}) {
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log(initialValue, 'initial value');
  },[])

  return (
    <View>
      <TextInput
      style={styles.input}
      onChangeText={(input) => {
        console.log(input)
        setInput(input)
      }}
      value={input}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
    margin: 5,
    textAlign: "center",
  },
});
