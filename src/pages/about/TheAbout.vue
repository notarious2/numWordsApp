<template>
  <div>
    <h1>About this Vue.js project</h1>
    <p class="app-description">{{ description }}</p>

    <p class="list-heading">
      I have utilized the following Vue.js concepts when building this
      application :
      <img @click="toggle(currentState)" :src="currentUrl" alt="double arrow" />
    </p>
    <list-item
      :is="ListItem"
      :skill="set.skill"
      :skill-desc="set.description"
      v-for="set in skillsets"
      :key="set.skill"
      ref="childs"
    />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import skillsets from "./skillset.js";
import description from "./desc.js";

import { ref } from "vue";
// eslint-disable-next-line
const childs = ref(null);

// current state of Toggle all is disabled
const currentState = ref(true);

// working with image that changes source on click
const urls = ref([
  require("@/assets/double-down.png"),
  require("@/assets/double-up.png"),
]);
const currentImage = ref(0);
const currentUrl = ref(urls.value[currentImage.value]);

function toggle() {
  console.log("here", currentState.value);
  if (currentImage.value === 0) {
    currentUrl.value = urls.value[1];
    currentImage.value = 1;
  } else if (currentImage.value === 1) {
    currentUrl.value = urls.value[0];
    currentImage.value = 0;
  }
  // accessing method of each child
  for (const i in Array.from(Array(childs.value.length).keys())) {
    childs.value[i].toggleAll(currentState.value);
  }
  currentState.value = currentState.value ? false : true;
}
</script>

<style scoped>
h1 {
  position: relative;
  text-align: center;
  color: #353535;
  padding-top: 10px;
  bottom: 10px;
  font-family: "Parisienne", sans-serif;
  font-size: 40px;
}
.app-description {
  background-color: rgb(192, 255, 234);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 10px;
  line-height: 1.5;
  border-radius: 10px;
}

.list-heading {
  display: block;
  position: relative;
  padding: 10px;
  background-color: rgb(192, 255, 234);
  border-radius: 10px;
}

img {
  height: 25px;
  vertical-align: middle;
  float: right;
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>
