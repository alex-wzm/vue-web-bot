import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import shortid from "shortid";

const serviceEndpoint = "http://localhost:8081/api/v1/detect_intent"
let sessionID

const WebBotService = {
  init() {
    Vue.use(VueAxios, axios);
    sessionID = shortid.generate()
  },

  detectIntent(data) {
    return axios
      .post(serviceEndpoint, { sessionID, ...data })
      .then(response => response)
  },
}

export default WebBotService