import type { App, Plugin } from "@vue/runtime-core";

export const makeInstaller = (components: Plugin[] = []) => {
  // 定义install方法
  const install = (app: App) => {
    // 对每一个组件进行遍历注册
    components.forEach((c) => app.use(c));
  };

  return {
    install,
  };
};
