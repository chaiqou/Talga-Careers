<template>
  <div>single job {{ currentJobId }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentJobId = computed(() => {
  console.log(route.params);
  return route.params.id;
});
</script>
