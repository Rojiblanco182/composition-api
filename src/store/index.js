import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
      { id: '3', text: 'Task 3', completed: true },
      { id: '4', text: 'Task 4', completed: false },
      { id: '5', text: 'Task 5', completed: false }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((toDo) => !toDo.completed)
    },
    allTodos(state, getters, rootState) {
      return [ ...state.todos ]
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter((toDo) => toDo.completed)
    }
  },
  modules: {
  }
})
