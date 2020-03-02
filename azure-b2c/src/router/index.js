import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
import LoginView from "@/views/LoginView.vue";
import DashboadView from "@/views/DashboadView.vue";
import ContentsView from "@/views/ContentsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboad",
    component: DashboadView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next() : next("/login");
    }
  },
  {
    path: "/contents",
    name: "contents",
    component: ContentsView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next() : next("/login");
    }
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next("/") : next();
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
