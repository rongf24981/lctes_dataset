'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("135701WpHTxX") / 1 + -parseInt("578FYmlKZ") / 2 * (parseInt("591jDymJy") / 3) + parseInt("2123592NnnYrh") / 4 + -parseInt("1685445JIOAxk") / 5 + -parseInt("1626522sPIEXS") / 6 + -parseInt("5798135mIeSGw") / 7 + parseInt("10645184rkMAIL") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 503833);
function __STRING_ARRAY__() {
  const _0x381438 = ["readFileSync", "abs", "1626522sPIEXS", "has", "2123592NnnYrh", "log", "add", "1685445JIOAxk", "trim", "578FYmlKZ", "utf8", "5798135mIeSGw", "591jDymJy", "map", "10645184rkMAIL", "135701WpHTxX"];
  __STRING_ARRAY__ = function () {
    return _0x381438;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = parseInt(arg[0]);
  const a = arg[1].split(" ")["map"](n => parseInt(n)).sort((a, b) => a - b);
  const set = new Set();
  let max = 0;
  for (let i = 0; i < N; i++) {
    let cnt = 0;
    if (set["has"](a[i])) {
      continue;
    }
    set["add"](a[i]);
    for (let j = 0; j < N; j++) {
      if (Math["abs"](a[j] - a[i]) <= 1) {
        cnt++;
      }
    }
    if (cnt > max) {
      max = cnt;
    }
  }
  console["log"](max);
};
function __DECODE_0__(mIndht, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mIndht, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
