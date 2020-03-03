import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AuthService from "./lib/AuthWithMsal.js";

Vue.config.productionTip = false;
Vue.prototype.$AuthService = new AuthService();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
