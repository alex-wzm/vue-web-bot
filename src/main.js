import Vue from "vue";
import VueDarkMode from '@vue-a11y/dark-mode'
import App from "./App.vue";

import WebBotService from "./common/web-bot.service";

Vue.config.productionTip = false;

Vue.use(VueDarkMode)

WebBotService.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
