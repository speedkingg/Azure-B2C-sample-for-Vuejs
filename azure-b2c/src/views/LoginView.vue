<template>
  <div class="home">
    <LoginFormPopup />
  </div>
</template>

<script>
import LoginFormPopup from "@/components/LoginFormPopup.vue";

export default {
  name: "Home",
  components: {
    LoginFormPopup
  }
};
</script>
