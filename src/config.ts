export const ratio = 2;

export const getPlatform = function () {
  var p = navigator.platform;
  if (
    p.indexOf("Win") === 0 ||
    p.indexOf("Mac") === 0 ||
    p.indexOf("Linux") === 0
  ) {
    return "pc";
  } else {
    return "mobile";
  }
};

export const platform = getPlatform();

export const isMac = navigator.platform.indexOf("Mac") === 0;
