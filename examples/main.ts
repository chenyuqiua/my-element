import { createApp } from "vue";
import App from "./App.vue";
import YqUI from "packages/yq-ui";
import "packages/theme-chalk/src/index.scss";

const Vue = createApp(App);

Vue.use(YqUI).mount("#app");
