import { App } from "vue";
import YqRow from "./components/row";
import YqCol from "./components/col";

const components = [YqRow, YqCol];
// 所有组件列表
// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};
export { install, YqRow, YqCol };

export default {
  install,
  ...components,
};
