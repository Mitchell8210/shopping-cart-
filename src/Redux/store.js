import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as Reducers from './ducks'

const rootReducer = combineReducers(Reducers)
const store = createStore(rootReducer, applyMiddleware(thunk))


export default store