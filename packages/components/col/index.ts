import { App } from "vue";
import YqRow from "./src/col.vue";

YqRow.install = (Vue: App) => {
  Vue.component(YqRow.name, YqRow);
};

export default YqRow;

export * from "./src/col";
