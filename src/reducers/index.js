import { combineReducers } from 'redux'
import todos from './todos'
import completedTasks from './completedTasks'
 
export default combineReducers({
    todos,completedTasks
 })