<template>
  <v-card width="300" class="mx-auto verticalCenter pa-5" color="rgba(255,255,255,.1)">
    <v-card-title>Dashboad</v-card-title>
    <v-card-text>
      <LogoutButton />
    </v-card-text>
  </v-card>
</template>

<script>
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "DashboadView",
  components: { LogoutButton }
};
</script>

<style scoped>
</style>
