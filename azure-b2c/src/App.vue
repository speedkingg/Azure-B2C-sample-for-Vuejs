<template>
  <v-app>
    <div class="filter" />
    <TheHeader />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",

  components: { TheHeader },

  data: () => ({}),
  created() {
    this.$AuthService.reflesh();
  }
};
</script>

<style scoped>
#app {
  background-image: url("./assets/img/earth.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
.filter {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
}
</style>