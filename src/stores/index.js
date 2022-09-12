import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      isLoggedIn: false,
      jobs: [],
      selectedOrganizations: [],
      selectedJobTypes: [],
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
    ADD_SELECTED_JOB_TYPES(state, jobTypes) {
      state.selectedJobTypes = jobTypes;
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
    UNIQUE_JOB_TYPES: (state) => {
      const uniqueJobTypes = new Set();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.title));
      return uniqueJobTypes;
    },
    FILTERED_JOBS: (state) => {
      return state.jobs
        .filter((job) => {
          if (state.selectedJobTypes.length === 0) return true;

          return state.selectedJobTypes.includes(job.title);
        })
        .filter((job) => {
          if (state.selectedOrganizations.length === 0) return true;

          return state.selectedOrganizations.includes(job.company);
        });
    },
  },
});
export default useStore;
