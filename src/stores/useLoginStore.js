import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLoginStore = defineStore("useLoginStore", () => {
  // State
  const isLoggedIn = ref(false);
  const jobs = ref([]);

  // Getters
  const uniqueOrganizations = computed(() => {
    const unique = new Set();
    jobs.value.forEach((job) => unique.add(job));
    return unique;
  });

  return { isLoggedIn, uniqueOrganizations };
});
