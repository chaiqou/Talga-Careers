import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/job-results",
      name: "job-results-page",
      component: () => import("@/views/JobResultsView.vue"),
    },
    {
      path: "/job-results/:id",
      name: "job-page",
      component: () => import("@/views/JobView.vue"),
    },
  ],
});

export default router;
