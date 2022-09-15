<template>
  <div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
        <p>
          <strong>Bekzod Mirahmedov</strong> &copy; &nbsp;
          {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footerWrap {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: rgb(160, 235, 235);
}
.footer {
  width: 400px;
  margin: auto;
}
.footerContent {
  float: left;
  width: 100%;
  padding: 10px 0;
}
.footer p {
  float: left;
  width: 100%;
  text-align: center;
}
</style>
