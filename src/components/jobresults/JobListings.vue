<template>
  <div class="flex-auto p-8 bg-talga-gray-2">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import JobListing from "@/components/jobresults/JobListing.vue";
import axiosInstance from "@/config/axios";

const jobs = ref([]);

onMounted(() => {
  fetchJobs();
});

const fetchJobs = async () => {
  const response = await axiosInstance.get("api/jobs");
  jobs.value = response.data.data;
};
</script>
