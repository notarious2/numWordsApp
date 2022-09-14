<template>
  <navigation-bar></navigation-bar>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <div class="box-container">
    <div class="input-box">
      <label for="">Enter the number:</label>
      <input type="text" ref="inputField" />
      <select name="languages" id="languages" v-model="language">
        <option class="lang-placeholder" value="" selected disabled>
          Choose language
        </option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="ar">Arabic</option>
        <option value="ru">Russian</option>
        <option value="tr">Turkish</option>
        <option value="vi">Vietnamese</option>
        <option value="id">Indonesian</option>
        <option value="uk">Ukranian</option>
        <option value="eo">Esperanto</option>
      </select>
      <button @click="setNumber">Convert</button>
    </div>
  </div>
  <the-output :converted="enteredSum"></the-output>
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
    };
  },
  methods: {
    setNumber() {
      console.log(this.$refs.inputField.value);
      if (this.$refs.inputField.value && this.language) {
        this.enteredSum = writtenNumber(this.$refs.inputField.value, {
          lang: this.language,
        });
      }
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
  max-width: 55rem;
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
</style>
