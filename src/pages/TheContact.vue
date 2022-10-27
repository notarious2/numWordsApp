<template>
  <div class="box">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/bekzod-mirahmedov-cfa-79b5b055">
          <font-awesome-icon icon="fab fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="https://github.com/notarious2">
          <font-awesome-icon icon="fab fa-github"
        /></a>
      </li>
      <li>
        <a href="mailto:notarious2@gmail.com"
          ><font-awesome-icon icon="fas fa-envelope"
        /></a>
      </li>
      <li>
        <a href="https://telegram.me/notarious2"
          ><font-awesome-icon icon="far fa-paper-plane"
        /></a>
      </li>

      <li>
        <a href="https://wa.me/998998426389"
          ><font-awesome-icon icon="fab fa-whatsapp"
        /></a>
      </li>
      <li>
        <a href="https://www.facebook.com/bekzod.mirahmedov"
          ><font-awesome-icon icon="fab fa-facebook-f"
        /></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: #dedede;
}

ul {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  width: 50px;
  height: 50px;
  display: block;
  text-align: center;
  margin: 0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: 0.5s;
  font-size: 26px;
}

ul li a:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  font-size: 30px;
}

ul li:nth-child(1) a {
  color: #3b5998;
}

ul li:nth-child(2) a {
  color: #6700ed;
}

ul li:nth-child(3) a {
  color: #dd4b39;
}

ul li:nth-child(4) a {
  color: #007bb6;
}

ul li:nth-child(5) a {
  color: #40e487;
}
ul li:nth-child(6) a {
  color: blue;
}
@media (max-width: 768px) {
  ul {
    position: relative;
    flex-direction: column;
    margin-top: 180px;
    margin-left: 30%;
    top: none;
    left: none;
  }

  ul li a {
    margin-top: 5px;
  }
  .box {
    display: flex;
    margin-right: 40%;
  }
}
</style>
