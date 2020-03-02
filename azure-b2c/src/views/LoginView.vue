<template>
  <div class="home">
    <v-card width="300">
      <v-card-title>Azure B2C Login</v-card-title>
      <v-card-actions class="py-5">
        <LoginButton class="mx-auto" />
      </v-card-actions>
    </v-card>
  </div>
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
