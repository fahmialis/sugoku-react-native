export function getBoard(payload) {
  return {type : 'board/getBoard', payload}
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}


export function fetchBoard(difficulty) {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      .then(data => data.json())
      .then(res => {
        dispatch(getBoard(res.board))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}