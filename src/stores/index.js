import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      isLoggedIn: false,
      jobs: [],
    };
  },

  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    RECIEVE_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },

  actions: {
    FETCH_JOBS: async (context) => {
      const jobListings = await getJobs();
      context.commit("RECIEVE_JOBS", jobListings);
    },
  },
});

export default useStore;
