import { createApp } from "vue";
import App from "./App.vue";
import YqUI from "packages";

const Vue = createApp(App);

Vue.use(YqUI).mount("#app");
