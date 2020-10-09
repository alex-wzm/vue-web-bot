import Vue from "vue";
import App from "./App.vue";

import WebBotService from "./common/web-bot.service";

Vue.config.productionTip = false;

WebBotService.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
