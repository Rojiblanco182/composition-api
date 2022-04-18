<template>
  <h1>Learning Slots</h1>
  <button @click="toggleModal(true)">Open modal</button>
  <Modal v-if="isModalOpen" @on:close="toggleModal(false)">
    <template v-slot:body>
      <p>Modal contenttttttttttttt ttttttttttttttttt tttttttttttttttttttttttt</p>
    </template>

    <template v-slot:header>
      <h3>Modal title</h3>
    </template>

    <template v-slot:footer>
      <button @click="toggleModal(false)">Close modal</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'
import { ref } from 'vue'

export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false)

    return {
      isModalOpen,
      toggleModal: (value) => isModalOpen.value = value
    }
  }
}
</script>

<style scoped>

</style>