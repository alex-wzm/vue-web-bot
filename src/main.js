import Vue from "vue";
import App from "./App.vue";

import DialogflowService from "./common/dialogflow.service";

Vue.config.productionTip = false;

DialogflowService.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
