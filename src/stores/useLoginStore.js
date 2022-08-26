import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("useLoginStore", () => {
  const isLoggedIn = ref(false);

  return { isLoggedIn };
});
