<template>
  <navigation-bar></navigation-bar>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <base-card>
    <form @submit.prevent="setNumber">
      <div class="input-box">
        <label for="">Enter the number:</label>
        <input
          type="text"
          ref="inputField"
          v-model="typedNum"
          @blur="clearError"
          placeholder="Enter a number"
        />
        <select v-model="language" @change="langChanged" @blur="clearError">
          <option class="lang-placeholder" value="" selected disabled>
            Choose language
          </option>
          <option v-for="lang in languagesList" :key="lang.value" :value="lang">
            {{ lang.text }}
          </option>
        </select>
        <button>Convert</button>
      </div>
    </form>
    <span v-if="!inputIsValid" id="validity-message">{{ errorMsg }}</span>
  </base-card>
  <the-output :converted="enteredSum" :language="language.text"></the-output>
  <the-footer></the-footer>
</template>

<script>
// var writtenNumber = require("written-number");
import TheOutput from "./components/TheOutput.vue";
import writtenNumber from "written-number";
// import Vue from "vue";

export default {
  name: "App",
  components: { TheOutput },
  data() {
    return {
      typedNum: "",
      inputIsValid: true,
      errorMsg: "",
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
      if (this.typedNum === "" && this.language === "") {
        this.errorMsg = "Please enter a number and choose language";
        this.inputIsValid = false;
        this.enteredSum = ""; //clearing to hide output box
        return;
      } else if (this.language === "") {
        this.errorMsg = "Please choose a language";
        this.inputIsValid = false;
        this.enteredSum = "";
        return;
      } else if (this.typedNum === "") {
        this.errorMsg = "Please enter a number";
        this.inputIsValid = false;
        this.enteredSum = "";
        return;
      }
      if (this.$refs.inputField.value && this.language) {
        this.inputIsValid = true;
        this.enteredSum = this.$refs.inputField.value.replaceAll(",", ""); //extracting refs and getting rid of commas
        this.enteredSum = writtenNumber(this.enteredSum, {
          //using writtenNumber library
          lang: this.language.value,
        });
      }
    },
    langChanged() {
      this.enteredSum = "";
    },
    clearError() {
      this.inputIsValid = true;
    },
  },
  // changing input format when typing
  watch: {
    typedNum: function (newVal) {
      const result = newVal
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/^0+/g, "0");
      this.$nextTick(() => (this.typedNum = result));
    },
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

#validity-message {
  text-align: center;
  padding-left: 170px;
  font-size: 12px;
  color: rgb(107, 33, 33);
  font-weight: bold;
}

.input-box {
  display: flex;
  padding: 10px;
  margin: 10px;
}

.input-box label {
  width: 180px;
  clear: left;
  padding-right: 10px;
  font-weight: bold;
  text-align: left;
}

.input-box input {
  float: left;
  width: 80%;
  padding-left: 10px;
  font-size: 20px;
}
.input-box button {
  width: 150px;
  border: solid 1px rgb(30, 29, 91);
  border-radius: 5px;
  background-color: rgb(83, 101, 214);
  font-weight: bold;
  color: white;
}
.input-box button:active {
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  transform: translateX(1px);
}
.input-box button:hover {
  background-color: rgb(30, 29, 91);
}
</style>
