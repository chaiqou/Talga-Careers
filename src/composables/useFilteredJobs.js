import { computed } from "vue";
import { useStore } from "vuex";

const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters.FILTERED_JOBS);
};

export default useFilteredJobs;
