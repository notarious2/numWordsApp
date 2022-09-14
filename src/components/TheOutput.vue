<template>
  <div class="box-container">
    <div class="popup" v-if="converted">
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
        <span id="copied">copied!</span>
      </div>
    </div>
  </div>
</template>

<script>
function showCopyConfirmation() {
  var sb = document.getElementById("copied");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  setTimeout(() => {
    sb.className = sb.className.replace("show", "");
  }, 1000);
}
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
      showCopyConfirmation();
    },
  },
};
</script>

<style scoped>
.output-box button {
  background-image: url("../assets/copy-icon2.png");
  background-size: cover;
  position: relative;
  width: 50px;
  height: 50px;
  border: 0;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 15px;
}
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

#copied {
  visibility: hidden;
  color: #fff;
  background-color: #333;
  min-width: 250px;
  margin-left: -125px;
  border-radius: 2px;
  padding: 16px;
  text-align: center;
  left: 50%;
  bottom: 30px;
  z-index: 1;
  position: fixed;
}

/* This will be activated when the snackbar's class is 'show' which will be added through JS */
#copied.show {
  visibility: visible;
  -webkit-animation: fadein 0.2s, fadeout 0.2s 1s;
  animation: fadein 0.2s, fadeout 0.2s 1s;
}

/* Animations for fading in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
