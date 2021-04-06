export function getBoardEasy (payload) {
  return {type : 'board/getBoardEasy', payload}
}

export function getBoardMedium (payload) {
  return {type : 'board/getBoardMedium', payload}
}

export function getBoardHard (payload) {
  return {type : 'board/getBoardHard', payload}
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function fetchBoardEasy() {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
      .then(data => data.json())
      .then(res => {
        dispatch(getBoardEasy(res))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}

export function fetchBoardMedium() {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/board?difficulty=medium')
      .then(data => data.json())
      .then(res => {
        dispatch(getBoardMedium(res))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}

export function fetchBoardHard() {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/board?difficulty=hard')
      .then(data => data.json())
      .then(res => {
        dispatch(getBoardHard(res))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}