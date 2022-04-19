import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

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
    toggleTaskStatus(state, taskId) {
      const taskIdx = state.todos.findIndex((task) => task.id === taskId)
      state.todos[taskIdx].completed = !state.todos[taskIdx].completed
    },
    createToDo(state, text = '') {
      if (text.length < 1) return
      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })
    }
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
    },
    getTodosByTab: (_, getters) => (tabId) => {
        switch (tabId) {
          case 'all': return getters.allTodos
          case 'pending': return getters.pendingTodos
          case 'completed': return getters.completedTodos
        }
      }
  },
  modules: {
  }
})
