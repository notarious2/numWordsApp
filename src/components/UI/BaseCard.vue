<template>
  <div class="box-container"><slot></slot></div>
</template>

<style scoped>
.box-container {
  margin: 2rem auto;
  max-width: 80%;
  border-radius: 12px;
  padding: 2rem;
  background-color: #74b2d1;
  /* display: block; */
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
}
@media only screen and (max-width: 769px) {
  .box-container {
    padding: 1rem;
    margin: 1rem auto;
    }

}
</style>
