<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="logo-text">Convert Numbers to Words</div>
    <img alt="Vue logo" src="../../assets/rotation.png" />
    <!-- NAVIGATION MENU -->
    <ul class="nav-links">
      <!-- NAVIGATION MENUS -->
      <div class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
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
  background-color: rgb(160, 235, 235);
  color: #fff;
  border-radius: 12px;
}
.nav-links a {
  color: black;
  text-decoration: none;
}
/* LOGO */
.logo {
  font-size: 32px;
}
/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
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
</style>
