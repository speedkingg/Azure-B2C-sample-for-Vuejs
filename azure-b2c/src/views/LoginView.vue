<template>
  <div class="home">
    <v-card width="300">
      <v-card-title>Azure B2C Login</v-card-title>
      <v-card-actions class="py-5">
        <LoginButtonPopup class="mx-auto" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import LoginButtonPopup from "@/components/LoginButtonPopup.vue";

export default {
  name: "Home",
  components: {
    LoginButtonPopup
  }
};
</script>
