<template>
  <div class="flex-auto p-8 bg-[#E5E5E5]">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
      </div>
    </div>
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

const currentPage = computed(() => {
  const route = useRoute();
  const pageString = route.query.page || "1";
  return Number.parseInt(pageString);
});

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;

  return jobs.value.slice(firstJobIndex, lastJobIndex);
});

const previousPage = computed(() => {
  const previousPage = currentPage - 1;
  const firstPage = 1;
  return previousPage >= firstPage ? previousPage : null;
});

const nextpage = computed(() => {
  const nextPage = currentPage + 1;
  const lastPage = jobs.value.length / 10;
  return nextPage <= lastPage ? nextPage : null;
});
</script>
