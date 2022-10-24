<template>
  <div id="footer">
    <p>
      <strong>Bekzod Mirahmedov</strong> &copy; &nbsp;
      {{ new Date().getFullYear() }}
    </p>
  </div>
  <!-- #footer -->
</template>

<style scoped>
#footer {
  background: rgb(222 255 255);
  height: 40px;
  width: 100%;
  order: 4;
  margin-top: auto;
  text-align: center;
  position: relative;
  bottom: 0;
}
#footer p {
  text-align: center;
  font-size: 12px;
}
</style>
