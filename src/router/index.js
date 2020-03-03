import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
import SignInView from "@/views/SignInView.vue";
import DashboardView from "@/views/DashboardView.vue";
import ContentsView from "@/views/ContentsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboad",
    component: DashboardView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next() : next("/signin");
    }
  },
  {
    path: "/contents",
    name: "contents",
    component: ContentsView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next() : next("/signin");
    }
  },

  {
    path: "/signin",
    name: "signin",
    component: SignInView,
    beforeEnter: (to, from, next) => {
      store.getters.isSignin ? next("/") : next();
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
