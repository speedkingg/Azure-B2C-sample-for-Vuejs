<template>
  <v-app>
    <v-content>
      <v-container>
        <LoginView />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginView from "./views/LoginView.vue";

export default {
  name: "App",

  components: {
    LoginView
  },

  data: () => ({}),
  created() {
    this.$AuthService.reflesh();
  }
};
</script>
