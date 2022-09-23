<template>
  <div class="footerWrap">
    <p class="footer-text">
      <strong>Bekzod Mirahmedov</strong> &copy; &nbsp;
      {{ new Date().getFullYear() }}
    </p>
  </div>
</template>

<style scoped>
.footerWrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(222 255 255);
  border-radius: 10px;
}

.footer-text {
  width: 100%;
}
</style>
