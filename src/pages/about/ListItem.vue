<template>
  <div>
    <div class="container">
      <li @click="toggleDesc" :class="{ selectedList: isSelected }">
        {{ skill }}
        <img
          v-if="!showDesc"
          src="../../assets/double-down.png"
          alt="double drop"
        />
      </li>
    </div>
    <span class="desc" v-if="showDesc">{{ skillDesc }}</span>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";

// eslint-disable-next-line
const props = defineProps(["skill", "skillDesc"]);

const showDesc = ref(false);
const isSelected = ref(false);

function toggleDesc() {
  showDesc.value = !showDesc.value;
  isSelected.value = !isSelected.value;
}
</script>

<style scoped>
img {
  height: 20px;
  vertical-align: middle;
  float: right;
  padding-right: 10px;
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
