import { App } from "vue";
import YqRow from "./src/row.vue";

YqRow.install = (Vue: App): void => {
  Vue.component(YqRow.name, YqRow);
};

export default YqRow;

export * from "./src/row";
export * from "./src/constants";
