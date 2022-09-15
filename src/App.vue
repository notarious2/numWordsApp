<template>
  <navigation-bar></navigation-bar>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <div class="box-container">
    <div class="input-box">
      <label for="">Enter the number:</label>
      <input type="text" ref="inputField" />
      <select
        name="languages"
        id="languages"
        v-model="language"
        @change="langChanged"
      >
        <option class="lang-placeholder" value="" selected disabled>
          Choose language
        </option>
        <option v-for="lang in languagesList" :key="lang.value" :value="lang">
          {{ lang.text }}
        </option>
      </select>
      <button @click="setNumber">Convert</button>
    </div>
  </div>
  <the-output :converted="enteredSum" :language="language.text"></the-output>
  <the-footer></the-footer>
</template>

<script>
// var writtenNumber = require("written-number");
import TheOutput from "./components/TheOutput.vue";
import writtenNumber from "written-number";

export default {
  name: "App",
  components: { TheOutput },
  data() {
    return {
      language: "",
      enteredSum: "",
      languagesList: [
        { value: "en", text: "English" },
        { value: "es", text: "Spanish" },
        { value: "fr", text: "French" },
        { value: "ar", text: "Arabic" },
        { value: "ru", text: "Russian" },
        { value: "tr", text: "Turkish" },
        { value: "vi", text: "Vietnamese" },
        { value: "id", text: "Indonesian" },
        { value: "uk", text: "Ukranian" },
        { value: "eo", text: "Esperanto" },
      ],
    };
  },
  methods: {
    setNumber() {
      if (this.$refs.inputField.value && this.language) {
        this.enteredSum = writtenNumber(this.$refs.inputField.value, {
          lang: this.language.value,
        });
      }
    },
    langChanged() {
      this.enteredSum = "";
    },
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

.box-container {
  margin: 2rem auto;
  max-width: 85%;
  border-radius: 12px;
  padding: 2rem;
  background-color: #74b2d1;
  /* display: block; */
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
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
</style>
