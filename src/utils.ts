export const comType = function (source: any, targetType?: string) {
  let t: string = Object.prototype.toString.call(source);
  t = t.substring(8, t.length - 1).toLowerCase();
  if (targetType) {
    targetType = targetType.toLowerCase();
    return t === targetType;
  } else {
    return t;
  }
};
