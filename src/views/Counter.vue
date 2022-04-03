<template>
  <h1>Counter</h1>
  <h2>{{ counter }}</h2>

  <button @click="increaseCounter">+1</button>
  <button @click="decreaseCounter">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
  name: 'Counter',
  setup() {
    const { counter, increaseCounter, decreaseCounter } = useCounter(3)

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>

<style>

</style>