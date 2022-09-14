<template>
  <div class="box-container">
    <div class="output-box">
      <label> English: </label>
      <input
        type="text"
        readonly
        :value="converted"
        ref="clone"
        v-on:focus="$event.target.select()"
        :class="{ highlightedClass: isHighlighted }"
      />
      <div :class="{ shake: copyDisplay }">
        <button @click="copyClipboard"></button>
        <!-- <p class="copied-span" v-if="copyDisplay">Copied!</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["converted"],
  data() {
    return {
      copyDisplay: false,
      isHighlighted: false,
    };
  },
  methods: {
    copyClipboard() {
      if (this.$refs.clone.value) {
        this.$refs.clone.focus();
        document.execCommand("copy");

        this.copyDisplay = true;
        this.isHighlighted = true;
        setTimeout(() => {
          this.copyDisplay = false;
          this.isHighlighted = false;
        }, 100);
      }
    },
  },
};
</script>
