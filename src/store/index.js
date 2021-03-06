import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSigin: false,
    user: {},
  },
  mutations: {
    SignIn(state, user) {
      state.isSigin = true;
      state.user = user;
    },
    SignOut(state) {
      state.isSigin = false;
      state.user = {};
    },
  },
  getters: {
    isSignin: (state) => {
      return state.isSigin;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
