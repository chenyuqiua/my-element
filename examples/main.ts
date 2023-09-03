import { createApp } from "vue";
import App from "./App.vue";
import YqUI from "packages";
import "packages/theme-chalk/src/display.scss";

const Vue = createApp(App);

Vue.use(YqUI).mount("#app");
