<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text>
        <v-avatar size="30">
          <v-icon>mdi-face</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list min-width="100">
      <v-list-item-title class="text-center clickable pa-3" @click="logout()">
        <v-icon left>mdi-logout</v-icon>sign out
      </v-list-item-title>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LogoutButton",

  data: () => ({}),
  methods: {
    logout() {
      this.$AuthService.logout();
    }
  },
  computed: {}
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>

