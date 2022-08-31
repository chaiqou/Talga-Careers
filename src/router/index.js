import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
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
    {
      path: "/teams",
      name: "teams-page",
      component: () => import("@/views/TeamsView.vue"),
    },
  ],
});

export default router;
