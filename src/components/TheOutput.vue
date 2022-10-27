<template>
  <slot>
    <base-card>
      <div class="popup" v-if="converted">
        <div class="output-box">
          <label> {{ language }}: </label>
          <textarea
            id="output"
            readonly
            :value="converted"
            ref="clone"
            @focus="$event.target.select()"
            :class="{ highlightedClass: isHighlighted }"
          >
          </textarea>
          <div :class="{ shake: copyDisplay }">
            <button @click="copyClipboard"></button>
            <!-- <p class="copied-span" v-if="copyDisplay">Copied!</p> -->
          </div>
          <span id="copied">copied!</span>
        </div>
      </div>
    </base-card>
  </slot>
</template>

<script setup>
import { defineProps, ref, onUpdated } from "vue";

// eslint-disable-next-line
const props = defineProps(["converted", "language"]);

function showCopyConfirmation() {
  var sb = document.getElementById("copied");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  setTimeout(() => {
    sb.className = sb.className.replace("show", "");
  }, 1000);
}

const copyDisplay = ref(false);
const isHighlighted = ref(false);
const clone = ref();

function copyClipboard() {
  showCopyConfirmation();
  if (clone.value.value) {
    clone.value.focus();
    document.execCommand("copy");

    copyDisplay.value = true;
    isHighlighted.value = true;
    setTimeout(() => {
      copyDisplay.value = false;
      isHighlighted.value = false;
    }, 200);
  }
}

function resize() {
  try {
    clone.value.style.height = "auto";
    clone.value.style.height = clone.value.scrollHeight + "px";
  } catch {
    //intentionally blank
  }
}
// Resizing textarea once it is updated
onUpdated(function () {
  resize();
});
</script>

<style scoped>
.output-box {
  display: flex;
  padding: 10px;
  margin: 10px;
}

.output-box input {
  float: left;
  width: 80%;
  font-size: 18px;
  font-weight: bold;
}

#output {
  font-size: 18px;
  font-weight: bold;
  padding: 1px 6px;
  width: 600px;
  overflow: hidden;
  height: 40px;
  resize: none;
}

/* #output {
  width: 300px;
  min-height: 72px;
  padding: 2px;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 4px;
  font-family: "Inconsolata", monospace;
  font-size: 1rem;
  color: #000;
} */

.output-box button {
  background-image: url("../assets/copy-icon.png");
  background-size: cover;
  position: relative;
  width: 50px;
  height: 50px;
  border: 0;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 15px;
}

.output-box label {
  width: 180px;
  clear: left;
  padding-top: 10px;
  font-weight: bold;
  text-align: left;
  display: block;
}

.shake {
  animation: shake 0.2s ease-in-out forwards;
}
.highlightedClass {
  background-color: #e39bc9;
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(10px, 0);
  }
}

#copied {
  visibility: hidden;
  color: black;
  background-color: rgb(150, 199, 232);
  min-width: 250px;
  margin-left: -125px;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  left: 50%;
  bottom: 100px;
  z-index: 1;
  position: fixed;
  font-weight: bold;
}

/* This will be activated when the copied span's class is 'show' which will be added through JS */
#copied.show {
  visibility: visible;
  -webkit-animation: fadein 0.2s, fadeout 0.2s 1s;
  animation: fadein 0.2s, fadeout 0.2s 1s;
}

/* Animations for fading in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 100px;
    opacity: 0.5;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 100px;
    opacity: 0.5;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 100px;
    opacity: 0.5;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 100px;
    opacity: 0.5;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
