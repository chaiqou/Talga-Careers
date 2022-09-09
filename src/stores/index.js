import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      isLoggedIn: false,
      jobs: [],
      selectedOrganizations: [],
    };
  },

  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    RECIEVE_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    ADD_SELECTED_ORGANIZATIONS(state, organizations) {
      state.selectedOrganizations = organizations;
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
    FILTERED_JOBS_BY_ORGANIZATIONS: (state) => {
      return state.jobs.filter((job) => {
        return state.selectedOrganizations.includes(job.company);
      });
    },
  },
});
export default useStore;
