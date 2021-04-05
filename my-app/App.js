import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function App() {
  const [initialBoard, setInitialBoard] = useState([])
  const [board, setBoard] = useState([])

  useEffect(() => {
    axios({
      url: 'https://sugoku.herokuapp.com/board',
      method: 'GET'
    })
      .then(data => {
        // console.log(data.data.board, 'ini board');
        setInitialBoard(data.data.board)
      })
      .catch(err => console.log(err))
  },[])
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(initialBoard)}</Text>
      <Text>adfasdfafasdfs</Text>
      <Text>board</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
