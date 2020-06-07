import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import shortid from "shortid";

const DIALOGFLOW_VERSION = "v2";
const SERVICE_ENDPOINT = `https://dialogflow.googleapis.com/${DIALOGFLOW_VERSION}`;
const PROJECT_ID_SLUG = `projects/${process.env.VUE_APP_DIALOGFLOW_PROJECT_ID}`;
const SESSION_ID_SLUG = `agent/sessions/${shortid.generate()}`;
const API_KEY_PARAM_SLUG = `key=${process.env.VUE_APP_DIALOGFLOW_API_KEY}`;

const DETECT_INTENT_REQUEST_URL = `${SERVICE_ENDPOINT}/${PROJECT_ID_SLUG}/${SESSION_ID_SLUG}:detectIntent?${API_KEY_PARAM_SLUG}`;

const DialogflowService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${process.env.VUE_APP_DIALOGFLOW_ACCESS_TOKEN}`;
  },

  detectIntent(params) {
    return axios
      .post(DETECT_INTENT_REQUEST_URL, params)
      .then((response) => response);
  },
};

export default DialogflowService;
