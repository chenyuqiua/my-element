import components from "./component";
import { makeInstaller } from "./make-installer";

/** 调用方法添加install方法 */
export default makeInstaller(components);
