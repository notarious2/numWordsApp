<template>
  <div class="tag">{{ langtag }}</div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps(["langtag"]);
</script>

<style>
:root {
  --color-text: black;
  --color-front: #62e3ec;
  --color-back: #1ba4ae;
}

.tag {
  position: relative;
  display: inline-block;
  border-radius: 6px;
  clip-path: polygon(20px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 20px);
  background: var(--color-front);
  padding: 12px 25px;
  margin: 2px 3px;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text);
  transition: clip-path 500ms;
  /* Make not selectable */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.tag:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: var(--color-back);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 6px 0;
  transition: transform 500ms;
}
</style>
