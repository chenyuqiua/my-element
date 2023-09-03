import { createApp } from "vue";
import App from "./App.vue";
import YqUI from "packages";
import "theme-chalk/display.scss";

const Vue = createApp(App);

Vue.use(YqUI).mount("#app");
