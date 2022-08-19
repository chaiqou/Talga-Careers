<template>
  <div>
    <button :class="buttonClass">{{ text }}</button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    default: "Sign in",
  },
});

const buttonClass = computed(() => {
  return {
    [props.type]: true,
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply text-white bg-talga-blue-1 rounded hover:shadow-talga-shadow-1;
}

.secondary {
  @apply text-talga-blue-1 bg-transparent hover:bg-talga-blue-2 hover:text-white;
}
</style>
