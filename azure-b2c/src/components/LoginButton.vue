<template>
  <div>
    <v-btn @click="login" v-if="!user">
      <v-icon small left>mdi-windows</v-icon>login
      <v-icon small right>mdi-checkbox-multiple-blank-outline</v-icon>
    </v-btn>
    <v-btn @click="logout" v-else>logout</v-btn>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "LoginButton",

  data: () => ({ errorMessage: "" }),
  methods: {
    login() {
      this.$AuthService.loginPopup();
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
