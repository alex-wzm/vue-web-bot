import DialogflowService from "./common/dialogflow.service";

DialogflowService.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
