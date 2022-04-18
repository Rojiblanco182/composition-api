import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
  const store = useStore()
  const currentTab = ref('all')

  return {
    currentTab,
    pending: computed(() => store.getters['pendingTodos']),
    all: computed(() => store.getters['allTodos']),
    completed: computed(() => store.getters['completedTodos']),
    todosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
    toggleTaskStatus: (taskId) => store.commit('toggleTaskStatus', taskId),
  }
}

export default useTodos