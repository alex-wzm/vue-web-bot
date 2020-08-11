<template>
  <div>
    <p>{{responseText}}</p>
    <h1>
      <div class="command-line">
        <form onsubmit="return false">
          <span class="prompt">></span>
          <!-- <pre class="prompt cursor">{{cursor}}</pre> -->
          <input
            class="prompt"
            type="text"
            autofocus
            v-model="userQuery"
            @input="onInput"
            @keydown="updateCursor"
            @keydown.left="onKeydownLeft"
            @keydown.right="onKeydownRight"
          />
          <button @click="submitQuery(userQuery)" type="submit">Query</button>
        </form>
      </div>
    </h1>
  </div>
</template>

<script>
import DialogflowService from "../common/dialogflow.service";

export default {
  name: "WebBot",
  data() {
    return {
      responseText: "Ask me anything.",
      cursor: "_",
      cursorOffset: 0,
      userQuery: "",
    };
  },
  methods: {
    submitQuery(queryText) {
      DialogflowService.detectIntent({
        queryInput: {
          text: {
            languageCode: "en",
            text: queryText,
          },
        },
      }).then((response) => {
        this.responseText = response.data.queryResult.fulfillmentText;
        this.resetPrompt();
      });
    },
    onInput(event) {
      console.log("input");
      this.updateCursor(event);
    },
    updateCursor(event) {
      console.log("update");
      this.cursor =
        " ".repeat(
          Math.min(20, event.target.selectionStart + this.cursorOffset)
        ) + "_";
    },
    onKeydownLeft(event) {
      console.log("left");
      // TODO: adjust cursorOffset if userQuery text overflows in input field
      this.updateCursor(event);
    },
    onKeydownRight(event) {
      console.log("right");
      // TODO: adjust cursorOffset if userQuery text overflows in input field
      this.updateCursor(event);
    },
    resetPrompt() {
      console.log("reset");
      this.userQuery = "";
      this.cursor = "_";
      this.cursorOffset = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.prompt {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5rem;
  padding: 5px;
}

.cursor {
  display: inline;
  position: absolute;
  line-height: 5px;
  pointer-events: none;

  animation: blinkingText 1.2s infinite;
}
@keyframes blinkingText {
  0% {
    color: #2c3e50;
  }
  49% {
    color: #2c3e50;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #2c3e50;
  }
}

input {
  border: none;
  // caret-color: transparent;
  caret-color: #2c3e50;
  color: #2c3e50;

  &:focus {
    border: none;
    outline: none;
  }
}

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
