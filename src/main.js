import { createApp } from "vue";

import App from "./App.vue";
import TheNavigationBar from "./components/UI/TheNavigationBar.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import BaseCard from "./components/UI/BaseCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import router from "./router.js";

import VueGtag from "vue-gtag";

library.add(fab, fas, far);

const app = createApp(App);

app.use(router);
app.use(VueGtag, { config: { id: "G-BVPH5TSYNW" } }); // for google analytics
app.component("NavigationBar", TheNavigationBar);
app.component("TheFooter", TheFooter);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
