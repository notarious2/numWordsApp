<template>
  <div class="box-container">
    <div class="output-box">
      <label> {{ language }} </label>
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
  props: ["converted", "language"],
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

<style scoped>
.shake {
  animation: shake 0.05s ease-in-out forwards;
}
.highlightedClass {
  background-color: #e39bc9;
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, 0);
  }
}
</style>
