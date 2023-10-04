import { App } from "vue";
import YqRow from "./components/row";
import YqCol from "./components/col";
export * from "packages/components";

// 所有组件列表
const components = [YqRow, YqCol];

// 定义 install 方法， App 作为参数
export const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export default install;
