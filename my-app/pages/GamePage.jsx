import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import BoardInput from '../components/BoardInput'
import { fetchBoard, solveBoard, validateBoard } from '../store/action'

export default function App(props) {
  const {board, loading} = useSelector ((state) => state)
  const status = useSelector((state) => state.status)
  const {name, difficulty}  = props.route.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBoard(difficulty))
  }, []);

  function validate() {
    dispatch(validateBoard())
    // console.log(status, 'stasdafads');
    if(status === 'unsolved') {
      Alert.alert('Keep trying!',
      "You will get it soon!"
      )
    } else { 
      Alert.alert(`Congrats ${name}`,
      `You won SUGOKU on ${difficulty.toUpperCase()}`,
    [
      {
        text: "Play again?",
        onPress: () => () => props.navigation.navigate('Home'),
        style: "default",
      },
    ]
      )

    }

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
      {/* <Text>board : {JSON.stringify(board)}</Text> */}
      <View style={{marginBottom: 10, alignItems: 'center'}}>
        <Text style={styles.text}>SUDOKU</Text>
        <Text>Hello { name ? {name} : 'anon' } </Text>
        <Text>Playing on { difficulty.toUpperCase() } </Text>
      </View>
      
        <View style={styles.board}>
          {
            loading ? <View>
              <ActivityIndicator size="large" />
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

          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <Button 
            title='Submit'
            onPress={() => props.navigation.replace('Finish', {name, difficulty})}
            ></Button>  
            <Button 
            title='Solve'
            onPress={() => dispatch(solveBoard())}
            ></Button> 
            <Button 
            title='Validate'
            onPress={() => validate()}
            ></Button> 
          </View>
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
    color: 'white',
    backgroundColor: 'black',
    marginTop: 5,
    alignItems: 'stretch',
    marginBottom: 10
  },
  board: {
    marginHorizontal: 15,
    marginBottom: 15
  },
  row: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 40
  },
  button : {
    flexDirection : 'row'
  }
});