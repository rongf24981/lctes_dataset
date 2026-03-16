'use strict';

function __DECODE_0__(jdFFva, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 139;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jdFFva, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("532483QGivYh") / 1 + -parseInt("12zHlcMB") / 2 * (parseInt("121971AHTozI") / 3) + -parseInt("3920944ITGuVC") / 4 + parseInt("27905myUuRJ") / 5 * (-parseInt("1206anFhML") / 6) + parseInt("182WmCCCS") / 7 * (-parseInt("2408ztcwDH") / 8) + -parseInt("9605511PTGRtS") / 9 + parseInt("3043720vZJCoa") / 10 * (parseInt("165gUWOkQ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 612033);
const Main = input => {
  let xs = input.trim().split(" ")["map"](v => parseInt(v, 10));
  let a = xs[0];
  let b = xs[1];
  let ans = 1;
  if (a >= b) {
    ans = 1;
  } else {
    for (let i = 1; (a - 1) * i + 1 < b; i++) {
      ans += 1;
    }
  }
  console["log"](ans);
};
function __STRING_ARRAY__() {
  const _0x39435a = ["27905myUuRJ", "182WmCCCS", "1206anFhML", "log", "3920944ITGuVC", "121971AHTozI", "3043720vZJCoa", "map", "165gUWOkQ", "2408ztcwDH", "9605511PTGRtS", "12zHlcMB", "532483QGivYh", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x39435a;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
