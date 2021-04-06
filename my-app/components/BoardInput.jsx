import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function BoardInput({initialValue}) {
  const [input, setInput] = useState(initialValue)

  // useEffect(() => {
  //   console.log(initialValue, 'initial value');
  // },[input])

  return (
    <View>
      <TextInput
      style={styles.input}
      onChangeText={(value) => {
        // console.log(input)
        setInput(value)
      }}
      onSubmitEditing={(value)=>{
        // console.log(value, 'value');
        setInput(value)
        // console.log(input, 'berubah');
      }}
      defaultValue={initialValue.toString()}
      keyboardType = 'numeric'
      maxLength = {1}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 2,
    margin: 5,
    textAlign: "center",
  },
});
