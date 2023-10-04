import { App } from "vue";

/**
 * @description 为组件添加install方法
 * @param comp 组件
 * @returns 处理后的组件
 */
export const withInstall = (comp: any) => {
  comp.install = (Vue: App) => {
    Vue.component(comp.name, comp);
  };
  return comp;
};
