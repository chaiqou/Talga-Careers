<template>
  <ul>
    <li v-bind:key="spotlight" v-for="spotlight in spotlights">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { ref, onMounted } from "vue";
const spotlights = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get("api/posts");
  spotlights.value = response.data.data;
});
</script>
