import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TheNavigationBar from "./components/UI/TheNavigationBar.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import TheInput from "./components/TheInput.vue";
import TheAbout from "./pages/about/TheAbout.vue";
import TheContact from "./pages/TheContact.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheInput,
  },
  {
    path: "/about",
    name: "About",
    component: TheAbout,
  },
  {
    path: "/contact",
    name: "Contact",
    component: TheContact,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active", // to highlight active tabs
});

const app = createApp(App);

app.use(router);
app.component("NavigationBar", TheNavigationBar);
app.component("TheFooter", TheFooter);
app.component("base-card", BaseCard);

app.mount("#app");
