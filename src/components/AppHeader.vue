<template>
  <div>
    <div class="header">
      <DarkModeButton />
    </div>
  </div>
</template>

<script>
import DarkModeButton from "./DarkModeButton.vue";

export default {
  name: "AppHeader",
  components: { DarkModeButton },
  data() {
    return {
      currentVersion: process.env.VUE_APP_VERSION,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  left: 0;
  top: 0;
  width: 100%;
  background: var(--bg);
  /* background: rgb(255, 255, 255); */
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.66) 66%,
    rgba(255, 255, 255, 0) 100%
  ); */
}
.header > * {
  margin: 0.5% 1%;
}
</style>