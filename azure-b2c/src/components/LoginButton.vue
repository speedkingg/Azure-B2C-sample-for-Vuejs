<template>
  <v-btn @click="login" v-if="!user" color="primary" outlined>
    <v-icon left>mdi-windows</v-icon>
    <div>login</div>
    <v-icon small right>mdi-checkbox-multiple-blank-outline</v-icon>
  </v-btn>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "LoginButton",

  data: () => ({ errorMessage: "" }),
  methods: {
    login() {
      this.$AuthService.loginPopup();
    }
  },
  computed: {
    user() {
      return store.getters.isSignin;
    }
  }
};
</script>
