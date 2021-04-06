import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import BoardInput from '../components/BoardInput'
import {getBoardEasy, fetchBoard} from '../store/action'

export default function App(props) {
  const board = useSelector ((state) => state.board)
  const dispatch = useDispatch()
  const {name, difficulty}  = props.route.params

  useEffect(() => {
    dispatch(fetchBoard(difficulty))
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>board : {JSON.stringify(board)}</Text>
      <Text style={styles.text}>sudoku</Text>
      <Text>hello { name } </Text>
        <View style={styles.board}>
          {
            board.map((row, rowIndex) => {
              return (
                <View style={styles.row} key={rowIndex}>
                  {
                    row.map((column, columnIndex) => {
                      return <BoardInput initialValue={column} key={`${rowIndex},${columnIndex}`}></BoardInput>
                    })
                  }
                </View>
              )
            })
          }
        </View>

        <Button 
        title='Submit'
        onPress={() => props.navigation.replace('Finish', {name, difficulty})}
        ></Button>  
        <Button 
        title='Solve'
        ></Button> 
        <Button 
        title='Validate'
        ></Button> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    marginTop: 50
  },
  text: {
    fontSize: 30,
    color: 'red',
    backgroundColor: 'pink',
    marginTop: 50,
    alignItems: 'center'
  },
  board: {
    marginHorizontal: 15,
  },
  row: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 40
  }
});