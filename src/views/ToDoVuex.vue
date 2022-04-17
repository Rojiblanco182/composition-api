<template>
  <h2>To-do list</h2>
  <!-- <h4>Pending: {{$store.state.todos.filter((t) => !t.completed).length}}</h4> -->
  <h4>Pending: {{ pending.length }}</h4>

  <h4>All: {{ all.length }}</h4>
  <h4>Completed: {{ completed.length }}</h4>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos'])
    }
  }
}
</script>

<style>

</style>