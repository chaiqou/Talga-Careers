<template>
  <h1>
    <span :class="actionClasses">{{ action }}</span>
    <br />
    for everyone
  </h1>
  <h2>Find your next job at Talga</h2>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
const action = ref("Build");
const interval = ref(null);

onMounted(() => {
  changeTitle();
});

onUnmounted(() => {
  clearInterval(interval.value);
});

const actionClasses = computed(() => {
  return {
    build: action.value === "Build",
    design: action.value === "Design",
    develop: action.value === "Develop",
    code: action.value === "Code",
  };
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

<style scoped>
.build {
  color: #1a73e8;
}
.design {
  color: #34a854;
}
.develop {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
