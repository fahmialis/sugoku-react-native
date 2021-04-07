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

export function validateBoard(data, encodeParams) {
  return(dispatch) => {
    fetch("https://sugoku.herokuapp.com/validate", {
      method: "POST",
      body: encodeParams(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(data => data.json())
      .then(res => {
        dispatch(setStatus(res.status))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function solveBoard(data, encodeParams) {
  // console.log(payload, 'action payload');
  // const {data, encodeParams} = payload
  console.log('masuk action');

  return(dispatch) => {
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => {
        console.log('masuk then', response.solution);
        dispatch(setBoardSolved(response.solution))
      })
      .catch(console.warn)
  }
}
