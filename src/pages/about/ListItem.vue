<template>
  <div>
    <div class="container">
      <li @click="toggleDesc" :class="{ selectedList: isSelected }">
        {{ skill }}
        <img :src="currentUrl" alt="double arrow" />
      </li>
    </div>
    <span class="desc" v-if="showDesc">{{ skillDesc }}</span>
  </div>
</template>
<script setup>
import { ref, defineProps, defineExpose } from "vue";

// eslint-disable-next-line
const props = defineProps(["skill", "skillDesc"]);

const showDesc = ref(false);
const isSelected = ref(false);

function toggleDesc() {
  if (currentImage.value === 0) {
    currentImage.value = 1;
    currentUrl.value = urls.value[currentImage.value];
  } else if (currentImage.value === 1) {
    currentImage.value = 0;
    currentUrl.value = urls.value[currentImage.value];
  }
  showDesc.value = !showDesc.value;
  isSelected.value = !isSelected.value;
}

function toggleAll(val) {
  showDesc.value = !!val;
  isSelected.value = !!val;

  if (showDesc.value) {
    currentImage.value = 1;
    currentUrl.value = urls.value[currentImage.value];
  } else {
    currentImage.value = 0;
    currentUrl.value = urls.value[currentImage.value];
  }
}
defineExpose({ toggleAll });

// working with image that changes source on click
const urls = ref([
  require("@/assets/double-down.png"),
  require("@/assets/double-up.png"),
]);
const currentImage = ref(0);
const currentUrl = ref(urls.value[currentImage.value]);
</script>

<style scoped>
img {
  height: 20px;
  vertical-align: middle;
  float: right;
  padding-right: 12px;
}

li {
  display: block;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
  user-select: none;
  border-radius: 10px;
}

.desc {
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  font-size: 16px;
  display: block;
  font-family: "Kalam", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 5px;
}

.selectedList {
  background-color: rgb(192, 255, 234);
  font-weight: bold;
}
</style>
