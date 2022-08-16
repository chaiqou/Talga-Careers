<template>
  <div>
    <button :class="buttonClass">Sign In</button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
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
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  @apply text-white bg-talga-blue-1 hover:shadow-talga-shadow-1;
}

.secondary {
  @apply text-talga-blue-1 bg-transparent hover:bg-talga-blue-2 hover:text-white;
}
</style>
