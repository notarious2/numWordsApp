<template>
  <div>
    <div class="container">
      <li @click="toggleDesc" :class="{ selectedList: isSelected }">
        {{ skill }}
        <img src="../../assets/double-down.png" alt="double drop" />
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
}

.desc {
  margin-top: 5px;
  margin-left: 20px;
  padding: 5px;
  font-size: 16px;
}

.selectedList {
  background-color: aquamarine;
  font-weight: bold;
}
</style>
