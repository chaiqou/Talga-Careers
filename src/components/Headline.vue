<template>
  <h1>{{ action }} for everyone</h1>
  <h2>Find your next job at Talga</h2>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const action = ref("Build");
const interval = ref(null);

onMounted(() => {
  changeTitle();
});

onUnmounted(() => {
  clearInterval(interval.value);
});

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ["Build", "Design", "Develop", "Code"];
    const currentActionIndex = actions.indexOf(action.value);
    const nextActionIndex = (currentActionIndex + 1) % actions.length;
    const nextAction = actions[nextActionIndex];
    action.value = nextAction;
  }, 3000);
};
</script>
