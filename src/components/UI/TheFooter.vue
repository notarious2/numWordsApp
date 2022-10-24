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
  width: 100%;
  text-align: center;
  background-color: rgb(222 255 255);
  border-radius: 10px;
  padding: 5px 0px 5px 0px;
}

.footer-text {
  width: 100%;
}
</style>
