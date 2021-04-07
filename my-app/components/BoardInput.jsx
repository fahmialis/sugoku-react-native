import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import {getBoard} from '../store/action'


export default function BoardInput({initialValue, rowIndex, columnIndex}) {
  const [input, setInput] = useState(initialValue)
  const {board, initialBoard} = useSelector((state) => state)
  const dispatch = useDispatch()

  function updateBoard() {
    const newBoard = board.map(row => [...row])
    newBoard[rowIndex][columnIndex] = Number(input)
    dispatch(getBoard(newBoard))
  }

  return (
    <View>
      {
        initialBoard[rowIndex][columnIndex] === 0 ? 
        <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setInput(value)
        }}
        onSubmitEditing={() => updateBoard()}
        defaultValue={initialValue.toString()}
        keyboardType = 'numeric'
        maxLength = {1}
        ></TextInput>
        :
        <Text
        style={styles.input}
        value={initialValue.toString()}
        >{initialValue.toString()}</Text>
      }
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
    width: 30,
    paddingTop: 5
  }
});
