import { connect } from 'react-redux'
import TodoList from '../components'
import * as actions from '../actions'

const mapStateToProps = state => ({
    todos: state.todos,
    completedTasks:state.completedTasks
})

const mapDispatchToProps = dispatch => ({
    addTodo: (item) => dispatch(actions.addTodo(item)),
    removeTodo: (item,index,section) => dispatch(actions.removeTodo(item,index,section)),
    doneTodo: (item,index) => dispatch(actions.doneTodo(item,index)),
    undoDoneTodo: (item,index) => dispatch(actions.undoDoneTodo(item,index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)