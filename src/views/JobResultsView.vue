<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script setup>
import JobFiltersSidebar from "@/components/jobresults/JobFiltersSidebar.vue";
import JobListings from "@/components/jobresults/JobListings.vue";
</script>
