<template>
  <v-card width="300" class="mx-auto verticalCenter pa-5" color="rgba(255,255,255,.1)">
    <v-card-title>Azure B2C SignIn</v-card-title>
    <v-card-actions class="py-5">
      <SignInButton class="mx-auto" />
    </v-card-actions>
  </v-card>
</template>

<script>
import SignInButton from "@/components/SignInButton.vue";

export default {
  name: "SignInView",
  components: {
    SignInButton
  }
};
</script>

<style scoped>
.verticalCenter {
  margin-top: 35vh;
}
</style>
