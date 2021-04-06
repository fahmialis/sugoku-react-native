import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  board:[],
  loading : false
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  if (type === 'board/getBoardEasy') {
    return {...state, board: payload}
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  } else if (type === 'board/getBoardMedium') {
    return {...state, board: payload}
  } else if (type === 'board/getBoardHard') {
    return {...state, board: payload}
  }

  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store