<template>
  <v-btn @click="logout" v-if="user">logout</v-btn>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "LogoutButton",

  data: () => ({}),
  methods: {
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
