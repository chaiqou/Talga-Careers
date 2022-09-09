<template>
  <div class="w-full h-16 bg-white border-b border-solid border-talga-gray-1">
    <div class="flex items-center h-full px-9">
      <div>
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="mr-3 text-gray-500 hover:text-gray-700"
        />
        <span>
          <span class="text-talga-green-1">{{
            FILTERED_JOBS_BY_ORGANIZATIONS.length
          }}</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const FILTERED_JOBS_BY_ORGANIZATIONS = computed(
  () => store.getters.FILTERED_JOBS_BY_ORGANIZATIONS
);
</script>
