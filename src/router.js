import { createRouter, createWebHistory } from "vue-router";

const TheInput = () => import("./components/TheInput.vue");
const TheAbout = () => import("./pages/about/TheAbout.vue");
const TheContact = () => import("./pages/TheContact.vue");
const NotFound = () => import("./pages/NotFound.vue");
const TheApi = () => import("./pages/api/TheApi.vue");

const routes = [
  // {
  //   path: "/",
  //   redirect: { name: "Home" },
  // },
  {
    // path: "/numWordsApp/",
    path: "/",
    name: "Home",
    component: TheInput,
  },
  {
    // path: "/numWordsApp/about",
    path: "/about",
    name: "About",
    component: TheAbout,
  },
  {
    // path: "/numWordsApp/contact",
    path: "/contact",
    name: "Contact",
    component: TheContact,
  },
  { path: "/api", name: "Api", component: TheApi },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active", // to highlight active tabs
});

export default router;
