<template>
  <div>
    <div class="bot-text">{{ responseText }}</div>
    <form onsubmit="return false">
      <InputPrompt ref="prompt" :userQuery.sync="userQuery" />
      <button type="submit" @click="submitQuery(userQuery)">Enter ↵</button>
    </form>
  </div>
</template>

<script>
import InputPrompt from "./InputPrompt.vue";
import WebBotService from "../common/web-bot.service";

export default {
  components: { InputPrompt },
  name: "WebBot",
  data() {
    return {
      responseText: "Ask me anything.",
      userQuery: "",
    };
  },
  methods: {
    submitQuery(queryText) {
      WebBotService.detectIntent({
        languageCode: "en",
        queryText: queryText,
      }).then((response) => {
        this.responseText = response.data;
        this.$refs.prompt.resetPrompt();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bot-text {
  font-size: 3rem;
}

button {
  font-size: 2rem;
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
