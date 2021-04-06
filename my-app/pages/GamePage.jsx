import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BoardInput from '../components/BoardInput'

export default function App(props) {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
      .then((res) => res.json())
      .then((res) => setBoard(res.board))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text>board : {JSON.stringify(board)}</Text>
      <Text style={styles.text}>sudoku</Text>
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
        onPress={() => props.navigation.navigate('Finish')}
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