<template>
  <div class="content">
    <navigation-bar></navigation-bar>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component class="child" :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer class="footer"></the-footer>
  </div>
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
