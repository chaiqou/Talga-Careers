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
    FILTERED_JOBS_BY_ORGANIZATIONS: (state) => {
      if (state.selectedOrganizations.length === 0) {
        return state.jobs;
      } else {
        return state.jobs.filter((job) =>
          state.selectedOrganizations.includes(job.company)
        );
      }
    },
    UNIQUE_JOB_TYPES: (state) => {
      const uniqueJobTypes = new Set();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },
    FILTERED_JOBS_BY_JOB_TYPES: (state) => {
      if (state.selectedJobTypes.length === 0) {
        return state.jobs;
      } else {
        return state.jobs.filter((job) =>
          state.selectedJobTypes.includes(job.jobType)
        );
      }
    },
  },
});
export default useStore;
