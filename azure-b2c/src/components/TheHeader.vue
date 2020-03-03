<template>
  <v-app-bar v-show="isSignIn" app flat fixed color="rgba(255,255,255,.1)">
    <v-toolbar-title class>Azure B2C sample</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn @click="toDashboard()" text class="text-capitalize">
        <v-icon left>mdi-view-dashboard</v-icon>Dashboard
      </v-btn>
      <v-btn @click="toContents()" text class="text-capitalize">
        <v-icon left>mdi-egg-easter</v-icon>Contents
      </v-btn>

      <SignOutButton />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import store from "@/store/index.js";
import router from "@/router/index.js";
import SignOutButton from "@/components/SignOutButton";

export default {
  name: "TheHeader",
  data() {
    return {};
  },
  props: {},
  components: { SignOutButton },
  created() {},
  methods: {
    toDashboard() {
      router.push(
        "/",
        () => {},
        () => {}
      );
    },
    toContents() {
      router.push(
        "/contents",
        () => {},
        () => {}
      );
    }
  },
  computed: {
    isSignIn() {
      return store.getters.isSignin;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed {
  position: sticky;
  width: 100%;
}
</style>