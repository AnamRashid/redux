import {createStore} from 'redux'
import ToDoReducers from '../Components/ToDoReducers'

const myStore= createStore(ToDoReducers)

export default myStore