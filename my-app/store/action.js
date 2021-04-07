export function getBoard(payload) {
  return {type : 'board/getBoard', payload}
}

export function getInitialBoard(payload) {
  return {type : 'initialBoard/getInitialBoard', payload: payload.map(row => [...row])}
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function setStatus (payload) {
  return {type : 'status/setStatus', payload}
}

export function setBoardSolved (payload) {
  return {type : 'board/setBoardSolved', payload}
}

export function fetchBoard(difficulty) {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      .then(data => data.json())
      .then(res => {
        dispatch(getBoard(res.board))
        dispatch(getInitialBoard(res.board))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}

export function validateBoard() {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://sugoku.herokuapp.com/validate`, {
      method: 'POST'
    })
      .then(data => data.json())
      .then(res => {
        dispatch(setStatus(res.status))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}

export function solveBoard({payload}) {
  const {initialBoard} = payload
  console.log(initialBoard, 'initial board');

  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

  const encodeParams = (params) => 
    Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

  const data = {board: initialBoard}

  return(dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.solution, 'solution')
        dispatch(setBoardSolved(response.solution))
      })
      .catch(console.warn)
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}