<template>
  <li class="mb-7">
    <router-link
      :to="jobUrl"
      class="block mx-auto bg-white border border-solid border-talga-gray-2 rounded-xl hover:shadow-xl hover:shadow-gray-200"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-talga-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.company }} ,</span>
          </div>
          <div>
            <span>{{ job.city }}</span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li>{{ job.requirements }}</li>
              <li>6+ experience in programming</li>
              <li>Laravel Vue experience</li>
            </ul>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const jobUrl = computed(() => {
  return `job-results/${props.job.id}`;
});
</script>
