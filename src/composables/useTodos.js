import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
  const store = useStore()
  const currentTab = ref('all')
  const isModalOpen = ref(false)

  return {
    currentTab,
    isModalOpen,
    pending: computed(() => store.getters['pendingTodos']),
    all: computed(() => store.getters['allTodos']),
    completed: computed(() => store.getters['completedTodos']),
    todosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
    toggleTaskStatus: (taskId) => store.commit('toggleTaskStatus', taskId),
    toggleModalStatus: (isOpen) => isModalOpen.value = isOpen,
    createToDo: (text) => store.commit('createToDo', text),
  }
}

export default useTodos