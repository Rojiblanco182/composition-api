<template>
  <h2>To-do list</h2>
  <!-- <h4>Pending: {{$store.state.todos.filter((t) => !t.completed).length}}</h4> -->
  <h4>Pending: {{ pending.length }}</h4>

  <hr>

  <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">All</button>
  <button :class="{ 'active': currentTab === 'pending' }" @click="currentTab = 'pending'">Pending</button>
  <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">Completed</button>

  <div>
    <ul>
      <li v-for="toDo in todosByTab" :key="toDo.id" :class="{ 'completed': toDo.completed }">
        {{toDo.text}}
      </li>
    </ul>
  </div>

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const currentTab = ref('all')

    return {
      currentTab,
      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      todosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value))
    }
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul {
    width: 300px;
    text-align: left;
  }

  li {
    cursor: pointer;
  }

  .active {
    background-color: #2c3e50;
    color: white;
  }

  .completed {
    text-decoration: line-through;
  }
</style>