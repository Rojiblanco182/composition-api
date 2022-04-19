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
      <li v-for="toDo in todosByTab" :key="toDo.id" :class="{ 'completed': toDo.completed }" @dblclick="toggleTaskStatus(toDo.id)">
        {{toDo.text}}
      </li>
    </ul>
  </div>

  <button @click="toggleModalStatus(true)">Create to-do</button>
  <Modal v-if="isModalOpen" @on:close="toggleModalStatus(false)" title="Custom modal" >
    <template v-slot:header>
      <h3>New to-do</h3>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createToDo(newToDoText); toggleModalStatus(false)">
        <input type="text" placeholder="Insert task here" v-model="newToDoText"> 
        <br>
        <button type="submit">Create</button>
      </form>
    </template>

    <template v-slot:footer>
      <button @click="toggleModalStatus(false)">Cancel</button>
    </template>

  </Modal>

</template>

<script>
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal';
import { ref } from 'vue';

export default {
  components: { Modal },
  setup() {
    const {
      currentTab,
      isModalOpen,
      pending,
      todosByTab,
      toggleTaskStatus,
      toggleModalStatus,
      createToDo
    } = useTodos()
    const newToDoText = ref('')

    return {
      currentTab,
      isModalOpen,
      pending,
      newToDoText,
      todosByTab,
      toggleTaskStatus,
      toggleModalStatus,
      createToDo,
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