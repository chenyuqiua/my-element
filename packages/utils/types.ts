export const isNumber = (val: any): val is number => typeof val === "number";
export const isObject = (val: any): boolean =>
  Object.prototype.toString.call(val) === "[object Object]";
