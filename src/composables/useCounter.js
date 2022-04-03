import { ref } from "vue";

const useCounter = ( initialValue = 0 ) => {
  const counter = ref(initialValue)

  return {
    counter,
    increaseCounter: () => counter.value++,
    decreaseCounter: () => counter.value--
  }
};

export default useCounter
