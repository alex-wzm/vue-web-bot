import Vue from "vue";
import App from "./App.vue";

// import DialogflowService from "./common/dialogflow.service";
import ChessAPIService from "./common/chess-api.service";

Vue.config.productionTip = false;

// DialogflowService.init();
ChessAPIService.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
