<template>
  <div>
    <li @click="toggleDesc" :class="{ selectedList: isSelected }">
      {{ skill }}
    </li>
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
li {
  display: flex;
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
}
</style>
