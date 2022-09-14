<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
    rel="stylesheet"
  />

  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="box-container">
    <div class="input-box">
      <label for="">Enter the number:</label>
      <input type="text" ref="inputField" />
      <button @click="setNumber">нажать</button>
    </div>
  </div>

  <div class="box-container">
    <div class="output-box">
      <label> English: </label>
      <input
        type="text"
        readonly
        v-model="enteredSum"
        ref="clone"
        v-on:focus="$event.target.select()"
        :class="{ highlightedClass: isHighlighted }"
      />
      <div :class="{ shake: copyDisplay }">
        <button @click="copyClipboard"></button>
        <!-- <p class="copied-span" v-if="copyDisplay">Copied!</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// var writtenNumber = require("written-number");

import writtenNumber from "written-number";

export default {
  name: "App",
  data() {
    return {
      enteredSum: "",
      copyDisplay: false,
      isHighlighted: false,
    };
  },
  methods: {
    setNumber() {
      console.log(this.$refs.inputField.value);
      if (this.$refs.inputField.value) {
        this.enteredSum = writtenNumber(this.$refs.inputField.value);
        this.$refs.inputField.value = "";
      }
    },
    copyClipboard() {
      if (this.$refs.clone.value) {
        this.$refs.clone.focus();
        document.execCommand("copy");

        this.copyDisplay = true;
        this.isHighlighted = true;
        setTimeout(() => {
          this.copyDisplay = false;
          this.isHighlighted = false;
        }, 100);
      }
    },
  },
};
</script>

<style>
* {
  font-family: "Libre Baskerville";
}

img {
  display: block;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
}

.box-container {
  margin: 2rem auto;
  max-width: 50rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 2rem;
  background-color: #9be3b6;
  /* display: block; */
}

.input-box,
.output-box {
  display: flex;
  padding: 10px;
  margin: 10px;
}

.input-box label,
.output-box label {
  width: 180px;
  clear: left;
  padding-right: 10px;
  font-weight: bold;
  text-align: left;
  display: block;
}

.input-box input,
.output-box input {
  float: left;
  width: 80%;
}
.output-box button {
  background-image: url("assets/copy-icon.png");
  background-size: cover;
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 15px;
}

.shake {
  animation: shake 0.05s ease-in-out forwards;
}
.highlightedClass {
  background-color: #e39bc9;
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, 0);
  }
}
</style>
