<template>
  <v-card width="300" class="mx-auto verticalCenter pa-5" color="rgba(255,255,255,.1)">
    <v-card-title>Azure B2C Login</v-card-title>
    <v-card-actions class="py-5">
      <LoginButton class="mx-auto" />
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";

export default {
  name: "Home",
  components: {
    LoginButton
  }
};
</script>

<style scoped>
.verticalCenter {
  margin-top: 35vh;
}
</style>
