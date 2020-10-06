<template>
  <div>
    <p>{{responseText}}</p>
    <form onsubmit="return false">
      <InputPrompt ref="prompt" :userQuery.sync="userQuery" />
      <button type="submit" @click="submitQuery(userQuery)">Query</button>
    </form>
  </div>
</template>

<script>
import InputPrompt from "./InputPrompt.vue";
// import DialogflowService from "../common/dialogflow.service";
import ChessAPISerivce from "../common/chess-api.service";

export default {
  components: { InputPrompt },
  name: "WebBot",
  data() {
    return {
      responseText: "Ask me anything.",
      userQuery: "",
      moves: "",
    };
  },
  methods: {
    submitQuery(queryText) {
      ChessAPISerivce.validateMove(queryText).then((response) => {
        console.log(response);
        console.log(this.moves);
        this.moves = response.data.validMove
          ? this.moves + queryText
          : this.moves;

        console.log(this.moves);

        ChessAPISerivce.getBestMove(this.moves).then((response) => {
          console.log(response);
          this.responseText = response.data.bestNext;
          this.moves += response.data.bestNext;
        });

        this.$refs.prompt.resetPrompt();
      });
    },
    // submitQuery(queryText) {
    //   DialogflowService.detectIntent({
    //     queryInput: {
    //       text: {
    //         languageCode: "en",
    //         text: queryText,
    //       },
    //     },
    //   }).then((response) => {
    //     this.responseText = response.data.queryResult.fulfillmentText;
    //     this.$refs.prompt.resetPrompt();
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 5px;
  padding: 0.33rem;

  &:focus {
    outline-color: #42b983;
  }

  &:hover {
    color: #42b983;
  }
}
</style>
