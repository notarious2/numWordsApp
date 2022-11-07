<template>
  <div>
    <div>
      <h1 class="app-desc">Convert numbers into words in 11 languages</h1>
    </div>
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
          <select
            v-model="language"
            @change="langChanged"
            @blur="clearError"
            class="language"
          >
            <option class="lang-placeholder" value="" selected disabled>
              Choose language
            </option>
            <option
              v-for="lang in languagesList"
              :key="lang.value"
              :value="lang"
            >
              {{ lang.text }}
            </option>
          </select>
          <button @click="buttonAnalytics">Convert</button>
        </div>
      </form>
      <span v-if="!inputIsValid" id="validity-message">{{ errorMsg }}</span>
    </base-card>
    <the-output :converted="enteredSum" :language="language.text"></the-output>
  </div>
</template>

<script setup>
import writtenNumber from "written-number";
import { ref, watch, nextTick } from "vue";
import numberToWordsUz from "number-to-words-uz";
import { event } from "vue-gtag";
import { defineAsyncComponent } from "vue";

const TheOutput = defineAsyncComponent(() => import("./TheOutput.vue"));

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
  { value: "uz", text: "Uzbek - Cyrillic" },
  { value: "uz", text: "Uzbek - Latin" },
  { value: "eo", text: "Esperanto" },
];

function buttonAnalytics() {
  event("convert-button-clicked", {
    event_category: "analytics",
    event_label: "Convert button pressed",
    value: 1,
  });
}

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
  } // if both input provided and language selected
  if (inputField.value.value && language.value) {
    inputIsValid.value = true;
    //extracting refs and getting rid of commas
    enteredSum.value = inputField.value.value.replaceAll(",", "");
    // for Uzbek language using number-to-words-uz
    if (language.value.value === "uz") {
      if (language.value.text.includes("Latin")) {
        enteredSum.value = numberToWordsUz.convert(enteredSum.value, {
          lang: "uzLatin",
        });
      } else {
        enteredSum.value = numberToWordsUz.convert(enteredSum.value, {
          lang: "uzCyril",
        });
      }
    } else {
      //using writtenNumber library
      enteredSum.value = writtenNumber(enteredSum.value, {
        lang: language.value.value, //see here
      });
    }
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
.app-desc {
  text-align: center;
  margin: 20px 10px 5px 10px;
  font-size: 18px;
}

.input-box {
  display: flex;
  padding: 10px;
  margin: 10px;
  gap: 2px;
}

.input-box label {
  width: 180px;
  clear: left;
  font-weight: bold;
  text-align: left;
}

.input-box input {
  float: left;
  width: 80%;
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

#validity-message {
  /* padding-left: 170px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgb(107, 33, 33);
  font-weight: bold;
}

@media (max-width: 768px) {
  .input-box {
    flex-direction: column;
    gap: 2px;
  }
  .input-box label {
    display: none;
  }

  .input-box input {
    margin-top: 5px;
    width: 100%;
  }
  .language {
    width: 100%;
    height: 30px;
  }
  /* make input and select sizes the same */
  input,
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .input-box button {
    height: 30px;
  }
}
</style>
