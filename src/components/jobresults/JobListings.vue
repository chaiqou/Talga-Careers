<template>
  <div class="flex-auto p-8 bg-talga-gray-2">
    <ol>
      <JobListing />
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import JobListing from "@/components/jobresults/JobListing.vue";
import axiosInstance from "@/config/axios";

const jobs = ref([]);

onMounted(() => {
  axiosInstance.get("api/posts").then((response) => {
    console.log(response);
  });
});
</script>
