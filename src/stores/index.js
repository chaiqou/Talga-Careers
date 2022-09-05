import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
  },
});

export default useStore;
