'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("763751qKAfrJ") / 1 + -parseInt("204AEkwYc") / 2 * (parseInt("3714Rpvkci") / 3) + -parseInt("4697428aVkwRy") / 4 * (-parseInt("5BnDscU") / 5) + parseInt("274344nckgBo") / 6 * (parseInt("14EawmfO") / 7) + -parseInt("8wqsOrH") / 8 * (-parseInt("1971153ZVdnXw") / 9) + parseInt("2582900HYrIaa") / 10 * (parseInt("44pIcVll") / 11) + -parseInt("30303396EnvMyu") / 12 * (parseInt("13TMwcEx") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 630174);
function __STRING_ARRAY__() {
  const _0x1f1bdb = ["8wqsOrH", "4697428aVkwRy", "14EawmfO", "readFileSync", "204AEkwYc", "5BnDscU", "13TMwcEx", "split", "274344nckgBo", "44pIcVll", "utf8", "3714Rpvkci", "log", "30303396EnvMyu", "/dev/stdin", "2582900HYrIaa", "1971153ZVdnXw", "763751qKAfrJ"];
  __STRING_ARRAY__ = function () {
    return _0x1f1bdb;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CmEJLb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 471;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CmEJLb, key);
}
function Main(INPUT) {
  const N = INPUT["split"]("\n")[0];
  if (N == 7 || N == 5 || N == 3) {
    console["log"]("YES");
  } else {
    console.log("NO");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
