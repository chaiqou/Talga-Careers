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

  getters: {
    UNIQUE_ORGANIZATIONS: (state) => {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.company));
      return uniqueOrganizations;
    },
  },
});

export default useStore;
