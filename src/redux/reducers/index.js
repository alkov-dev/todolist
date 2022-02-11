import todosReducer from './todos'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todosReducer,
})



export default rootReducer