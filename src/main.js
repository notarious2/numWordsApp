import { createApp } from "vue";
import App from "./App.vue";
import TheNavigationBar from "./components/UI/TheNavigationBar.vue";
import TheFooter from "./components/UI/TheFooter.vue";

const app = createApp(App);

app.component("NavigationBar", TheNavigationBar);
app.component("TheFooter", TheFooter);

app.mount("#app");
