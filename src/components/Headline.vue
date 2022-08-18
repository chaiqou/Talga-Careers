<template>
  <h1 class="font-bold tracking-tighter text-8xl mb-14">
    <span :class="actionClasses">{{ action }}</span>
    <br />
    for everyone
  </h1>
  <h2 class="text-3xl font-light">Find your next job at Talga.</h2>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import nextElementInArrayList from "@/helpers/nextElementInArrayList";
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
    const nextAction = nextElementInArrayList(actions, action.value);
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
