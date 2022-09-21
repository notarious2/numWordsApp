<template>
  <div>
    <h1>About this project</h1>
    <p class="app-description">{{ description }}</p>
    <p class="list-heading">
      I have utilized the following Vue.js concepts when building this
      application :
    </p>
    <component
      :is="ListItem"
      :skill="set.skill"
      :skill-desc="set.description"
      v-for="set in skillsets"
      :key="set.skill"
    />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import skillsets from "./skillset.js";
import description from "./desc.js";

// eslint-disable-next-line
</script>

<style scoped>
h1 {
  padding: 2px;
  text-align: center;
}

.app-description {
  background-color: rgb(192, 255, 234);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 10px;
  line-height: 1.5;
  border-radius: 10px;
}

.list-heading {
  padding: 10px;
  background-color: rgb(192, 255, 234);
}
</style>
