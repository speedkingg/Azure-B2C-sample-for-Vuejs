import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSigin: false,
    user: {}
  },
  mutations: {
    sigin(state, user) {
      state.isSigin = true;
      state.user = user;
    },
    signout(state) {
      state.isSigin = false;
      state.userId = "";
    }
  },
  getters: {
    isSignin: state => {
      return state.isSigin;
    },
    userId: state => {
      return state.userId;
    }
  },
  actions: {},
  modules: {}
});
