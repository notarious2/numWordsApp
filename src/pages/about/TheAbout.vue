<template>
  <div>
    <h3>
      I have utilized the following Vue concepts when implementing this project:
    </h3>

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

// eslint-disable-next-line
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
