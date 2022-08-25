<template>
  <div class="flex-auto p-8 bg-[#E5E5E5]">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
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

const displayedJobs = computed(() => {
  const route = useRoute();

  const pageString = route.query.page || "1";
  const pageNumber = Number.parseInt(pageString);

  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;

  return jobs.value.slice(firstJobIndex, lastJobIndex);
});
</script>
