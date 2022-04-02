<template>
  <h1>Counter</h1>
  <h2>{{ counter }}</h2>

  <button @click="increaseCounter">+1</button>
  <button @click="decreaseCounter">-1</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Counter',
  setup() {
    const counter = ref(3)

    return { 
      counter,
      increaseCounter: () => counter.value++,
      decreaseCounter: () => counter.value--
      }
  }
}
</script>

<style>

</style>