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
import ListItem from "../components/UI/ListItem.vue";

// eslint-disable-next-line
const skillsets = [
  {
    skill: "Composition API",
    description:
      "I first used Options API and then switched to Composition API",
  },
  { skill: "Input", description: "add Description here" },
  { skill: "Page transition", description: "add Description here" },
  { skill: "Button Animation", description: "add Description here" },
  {
    skill: "Vue router for page navigation and styling active pages",
    description: "add Description here",
  },
  {
    skill: "Component interaction with props",
    description: "add Description here",
  },
  {
    skill: "List Rendering v-for with a Component",
    description: "this page for example was created this way",
  },
];
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
