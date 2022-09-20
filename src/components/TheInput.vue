<template>
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
</template>

<script setup>
import TheOutput from "./TheOutput.vue";
import writtenNumber from "written-number";
import { ref, watch, nextTick } from "vue";

// Handling Input Errors
const inputIsValid = ref(true);
const errorMsg = ref("");
// Ref in the DOM
const inputField = ref();
// gets the number from ref inputField after it is validated and button clicked
const enteredSum = ref("");

const typedNum = ref("");
const language = ref("");

const languagesList = [
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
];

function langChanged() {
  enteredSum.value = "";
}

function clearError() {
  inputIsValid.value = true;
}

function setNumber() {
  if (typedNum.value === "" && language.value === "") {
    errorMsg.value = "Please enter a number and choose language";
    inputIsValid.value = false;
    enteredSum.value = ""; //clearing to hide output box
    return;
  } else if (language.value === "") {
    errorMsg.value = "Please choose a language";
    inputIsValid.value = false;
    enteredSum.value = "";
    return;
  } else if (typedNum.value === "") {
    errorMsg.value = "Please enter a number";
    inputIsValid.value = false;
    enteredSum.value = "";
    return;
  }
  if (inputField.value.value && language.value) {
    inputIsValid.value = true;
    enteredSum.value = inputField.value.value.replaceAll(",", ""); //extracting refs and getting rid of commas
    enteredSum.value = writtenNumber(enteredSum.value, {
      //using writtenNumber library
      lang: language.value.value, //see here
    });
  }
}

// adds commas and cuts trailling zeros when input field is typed
watch(typedNum, function (newValue) {
  const result = newValue
    .replace(/^0+(0$|[1-9])/gm, "$1") // remove all leading zeros except if 0using a capture group:
    .replace(/\D/g, "") // replace all characters other than numbers
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); //format numbers - adds commas
  nextTick(() => (typedNum.value = result));
});
</script>

<style scoped>
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
