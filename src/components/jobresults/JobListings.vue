<template>
  <div class="flex-auto p-8 bg-[#E5E5E5]">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'job-results-page', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-talga-blue-1"
            >Back</router-link
          >
          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font-semibold text-talga-blue-1"
            :to="{ name: 'job-results-page', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import JobListing from "@/components/jobresults/JobListing.vue";

import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  fetchJobs();
});

const fetchJobs = async () => {
  store.dispatch("FETCH_JOBS");
};

const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

const currentPage = computed(() => {
  const route = useRoute();
  const pageString = route.query.page || "1";
  return Number.parseInt(pageString);
});

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 1;
  const lastJobIndex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});

const previousPage = computed(() => {
  const prevPage = currentPage.value - 1;
  const firstPage = 1;
  return prevPage >= firstPage ? prevPage : null;
});

const nextPage = computed(() => {
  const nxPage = currentPage.value + 1;
  const lastPage = FILTERED_JOBS.value.length / 10;
  return nxPage <= lastPage ? nxPage : null;
});
</script>
