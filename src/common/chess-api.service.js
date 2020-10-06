import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const CHESS_API_URL = "http://chess-api.herokuapp.com";

const ChessAPIService = {
  init() {
    Vue.use(VueAxios, axios);
  },
  getBestMove(moves) {
    console.log("getBestMove");
    return axios.get(`${CHESS_API_URL}/next_best/${moves}`);
  },
  validateMove(moves) {
    console.log("validateMove");
    return axios.get(`${CHESS_API_URL}/valid_move/${moves}`);
  },
  getGameStatus(moves) {
    console.log("getGameStatus");
    return axios.get(`${CHESS_API_URL}/status/${moves}`);
  },
};

export default ChessAPIService;
