import * as actionTypes from './actionTypes'

export function addTodo(item) {
     return {
      type: actionTypes.ADD_TODO,
      data: item,
      meta: {
        throttle: 2000
      }
    };
  }

  export function removeTodo(item,index,section) {
    return {
      type: actionTypes.REMOVE_TODO,
      data: item,
      section:section,
      index:index,
    };
  }


  export function doneTodo(item,index) {
    return {
      type: actionTypes.DONE_TODO,
      data: item,
      index:index,
    };
  }

  export function undoDoneTodo(item,index) {
    return {
      type: actionTypes.UNDONE_TODO,
      data: item,
      index:index,
    };
  }