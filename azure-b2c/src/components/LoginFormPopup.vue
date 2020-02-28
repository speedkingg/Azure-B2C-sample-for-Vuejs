<template>
  <div>
    <v-card width="300">
      <v-card-title>Azure B2C Login</v-card-title>
      <v-card-actions class="py-5">
        <v-btn @click="login" v-if="!user" class="mx-auto">login with Microsoft</v-btn>
        <v-btn @click="logout" v-else class="mx-auto">logout</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "LoginFormPopup",

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
