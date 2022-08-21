import { createRouter, createWebHistory } from "vue-router";

import JobResultsView from "@/views/JobResultsView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomeView,
    },
    {
      path: "/job-results",
      name: "job-results-page",
      component: JobResultsView,
    },
  ],
});

export default router;
