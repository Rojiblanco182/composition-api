<template>
  <h1>Learning Slots</h1>
  <button>Open modal</button>
  <Modal>
    <template v-slot:body>
      <p>Modal contenttttttttttttt ttttttttttttttttt tttttttttttttttttttttttt</p>
    </template>

    <template v-slot:header>
      <h3>Modal title</h3>
    </template>

    <template v-slot:footer>
      <button>Close modal</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: { Modal },
  setup() {

  }
}
</script>

<style scoped>

</style>