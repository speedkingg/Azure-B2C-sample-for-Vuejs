<template>
  <div>
    <v-btn @click="login" v-if="!user">
      <v-icon small left>mdi-windows</v-icon>login
    </v-btn>
    <v-btn @click="logout" v-else>logout</v-btn>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "LoginButtonPopup",

  data: () => ({ errorMessage: "" }),
  methods: {
    login() {
      this.$AuthService.login();
    },
    logout() {
      this.$AuthService.logout();
    }
  },
  computed: {
    user() {
      return store.getters.isSignin;
    }
  }
};
</script>
