import { App } from "vue";
import components from "./components/component";
export * from "packages/components";

// 定义 install 方法， App 作为参数
export const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export default install;
