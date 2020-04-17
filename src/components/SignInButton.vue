<template>
  <v-btn @click="SignIn" v-if="!isSignin" color="primary" class="text-capitalize" outlined>
    <v-icon left>mdi-microsoft</v-icon>Sign In
    <v-icon small right>mdi-checkbox-multiple-blank-outline</v-icon>
  </v-btn>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "SignInButton",

  data: () => ({ errorMessage: "" }),
  methods: {
    SignIn() {
      this.$AuthService.SignInPopup();
    }
  },
  computed: {
    isSignin() {
      return store.getters.isSignin;
    }
  }
};
</script>
