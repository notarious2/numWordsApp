<template>
  <nav class="navbar">
    <!-- LOGO -->
    <router-link to="/">
      <div class="logo-text">Convert Numbers to Words</div>
    </router-link>
    <!-- NAVIGATION MENU -->
    <ul class="nav-links">
      <!-- NAVIGATION MENUS -->
      <div class="menu">
        <router-link class="link" to="/"><li>Home</li></router-link>
        <router-link class="link" to="/contact"><li>Contact</li></router-link>
        <router-link class="link" to="/about"><li>About</li></router-link>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.logo-text {
  font-family: "Parisienne", sans-serif;
  font-size: 44px;
  font-weight: bold;
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  /* to make text not selectable: */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

a {
  text-decoration: none;
}

img {
  display: block;
  width: 7%;
}

/* NAVBAR STYLING STARTS */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(222 255 255);
  border-radius: 12px;
}

.nav-links {
  flex-direction: column;
  display: flex;
}

.nav-links a {
  color: black;
  text-decoration: none;
  display: flex;
}
/* LOGO */
.logo {
  font-size: 32px;
}
/* NAVBAR MENU */
.menu {
  gap: 1em;
  font-size: 18px;
  display: flex;
}
.menu li:hover {
  background-color: rgb(135, 203, 203);
  border-radius: 5px;
  transition: 0.3s ease;
}

.menu li {
  padding: 5px 14px;
  list-style: none;
}
.link.active {
  background-color: rgb(135, 203, 203);
  border-radius: 5px;
}

@media only screen and (max-width: 769px) {
  .menu {
    display: block;
    margin-right: 20px;
  }
}
</style>
