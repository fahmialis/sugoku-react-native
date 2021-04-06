import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  board: [],
  initialBoard: [],
  loading: true,
  status: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  } else if (type === 'board/getBoard') {
    return {...state, board: payload}
  } else if (type === 'initialBoard/getInitialBoard') {
    return {...state, initialBoard: payload}
  } else if( type === 'status/setStatus') {
    return {...state, status: payload}
  }
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store