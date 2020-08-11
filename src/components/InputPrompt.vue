<template>
  <h1>
    <span class="prompt">></span>
    <pre class="prompt cursor">{{cursor}}</pre>
    <input
      class="prompt"
      type="text"
      autofocus
      v-model="userQuery"
      @input="onInput"
      @keydown.left="onKeydownLeft"
      @keydown.right="onKeydownRight"
      @keydown="updateCursor"
    />
  </h1>
</template>

<script>
export default {
  name: "InputPrompt",
  data() {
    return {
      cursor: "_",
      cursorOffset: 0,
      userQuery: "",
    };
  },
  methods: {
    onInput(event) {
      this.updateCursor(event);
      this.$emit("update:userQuery", event.target.value);
    },
    updateCursor(event) {
      // TODO: cleanup cursor events - right now there are extra update calls
      this.cursor =
        " ".repeat(
          Math.min(20, event.target.selectionStart + this.cursorOffset)
        ) + "_";
    },
    onKeydownLeft(event) {
      // TODO: adjust cursorOffset if userQuery text overflows in input field
      this.updateCursor(event);
    },
    onKeydownRight(event) {
      // TODO: adjust cursorOffset if userQuery text overflows in input field
      this.updateCursor(event);
    },
    resetPrompt() {
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
  caret-color: transparent;
  // caret-color: #2c3e50;
  color: #2c3e50;

  &:focus {
    border: none;
    outline: none;
  }
}
</style>
