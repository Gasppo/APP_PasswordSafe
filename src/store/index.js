
import { createStore } from 'redux'
import rootReducer from '../actions'

const store = createStore(rootReducer)


export default store