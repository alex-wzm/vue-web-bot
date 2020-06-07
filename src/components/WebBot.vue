<template>
  <div>
    <p>{{responseText}}</p>
    <h1>
      >_
      <input type="text" v-model="userQuery" />
      <button @click="submitQuery(userQuery)">Query</button>
    </h1>
  </div>
</template>

<script>
import DialogflowService from "../common/dialogflow.service";

export default {
  name: "WebBot",
  data() {
    return {
      userQuery: "",
      responseText: "Ask me anything."
    };
  },
  methods: {
    submitQuery(queryText) {
      DialogflowService.detectIntent({
        queryInput: {
          text: {
            languageCode: "en",
            text: queryText
          }
        }
      }).then(response => {
        this.responseText = response.data.queryResult.fulfillmentText;
      });
    }
  }
};
</script>

<style scoped>
</style>
