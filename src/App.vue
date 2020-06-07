<template>
  <div id="app">
    <WebBot />
    <AppFooter />
  </div>
</template>

<script>
import WebBot from "./components/WebBot.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    WebBot,
    AppFooter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
