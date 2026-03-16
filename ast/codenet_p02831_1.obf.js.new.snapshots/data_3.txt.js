'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("26oAoTMk") / 1 * (-parseInt("13950PxhNqu") / 2) + parseInt("2064702hcZhPD") / 3 + parseInt("5884ynrkUt") / 4 * (parseInt("5045qevULF") / 5) + parseInt("12018VsnRmk") / 6 * (parseInt("2709djoDZB") / 7) + parseInt("11569264ZGRXtA") / 8 + parseInt("1089caVgGz") / 9 * (-parseInt("136130AQkwgV") / 10) + -parseInt("3058165rVCTjU") / 11 * (parseInt("72YgpUwo") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 897179);
const Main = input => {
  let xs = input.trim().split(" ")["map"](v => parseInt(v, 10));
  let m = xs[0];
  let n = xs[1];
  let r = 0;
  let d = 0;
  let x = m;
  let y = n;
  if (m >= n) {
    while (n > 0) {
      let r = m % n;
      m = n;
      n = r;
    }
    d = m;
  } else {
    while (m > 0) {
      r = n % m;
      n = m;
      m = r;
    }
    d = n;
  }
  let ans = x * y / d;
  console["log"](ans);
};
function __DECODE_0__(ckJxHe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ckJxHe, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x2f7191 = ["26oAoTMk", "3058165rVCTjU", "1089caVgGz", "utf8", "72YgpUwo", "map", "12018VsnRmk", "13950PxhNqu", "11569264ZGRXtA", "5884ynrkUt", "log", "2064702hcZhPD", "136130AQkwgV", "5045qevULF", "readFileSync", "/dev/stdin", "2709djoDZB"];
  __STRING_ARRAY__ = function () {
    return _0x2f7191;
  };
  return __STRING_ARRAY__();
}
