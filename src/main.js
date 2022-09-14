import { createApp } from "vue";
import App from "./App.vue";
import TheNavigationBar from "./components/UI/TheNavigationBar.vue";

const app = createApp(App);

app.component("NavigationBar", TheNavigationBar);

app.mount("#app");
