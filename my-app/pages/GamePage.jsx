import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import BoardInput from '../components/BoardInput'
import { fetchBoard, solveBoard, validateBoard } from '../store/action'

export default function App(props) {
  const {board, loading, initialBoard} = useSelector ((state) => state)
  const status = useSelector((state) => state.status)
  const {name, difficulty}  = props.route.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBoard(difficulty))
  }, [dispatch]);

  function validate() {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

    const encodeParams = (params) => 
      Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');

    const data = {board: board}
    dispatch(validateBoard(data, encodeParams))
    console.log(status, 'stasdafads');
    if(status !== 'solved') {
      Alert.alert('Keep trying!',
      "You will get it soon!"
      )
    } else { 
      Alert.alert(`Congrats ${name ? {name} : 'anon'}`,
      `You won SUGOKU on ${difficulty.toUpperCase()}`,
    [
      {
        text: "Play again?",
        onPress: () => () => props.navigation.navigate('Home'),
        style: "default",
      },
    ])
    }
  }

  function solve() {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

    const encodeParams = (params) => 
      Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');

    const data = {board: initialBoard}
    // console.log(data, 'data game page');

    dispatch(solveBoard(data, encodeParams))
  }

  return (
    <View style={styles.container}>
      {/* <Text>board : {JSON.stringify(board)}</Text> */}
      <View style={styles.title}>
        <Text style={styles.text}>SUGOKU</Text>
        <Text>Hello { name ? {name} : 'anon' } </Text>
        <Text>Playing on { difficulty.toUpperCase() } </Text>
      </View>
      
        <View style={styles.board}>
          {
            loading ? <View>
              <ActivityIndicator size="large" color="white"/>
            </View> :
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

          <View style={styles.button_group}>
            <Button 
            title='Give up'
            onPress={() => solve()}
            ></Button> 
            <Button 
            title='Check?'
            onPress={() => validate()}
            ></Button> 
          </View>
            <Button
            title='Skip and win :)'
            onPress={() => props.navigation.replace('Finish', {name, difficulty})}
            ></Button>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'lightblue', 
    height: 1000
  },
  title: {
    marginBottom: 10, 
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    color: 'white',
    marginTop: 5,
    alignItems: 'stretch',
    marginBottom: 10
  },
  board: {
    marginHorizontal: 15,
    marginBottom: 20
  },
  row: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 40
  },
  button_group: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    marginBottom: 20
  }
});