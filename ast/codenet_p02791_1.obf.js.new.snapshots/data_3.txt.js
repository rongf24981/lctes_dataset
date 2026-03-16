'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("117479Yaaurr") / 1 * (parseInt("12UllYrY") / 2) + parseInt("600402LVDRTv") / 3 + -parseInt("2158892AeSSLe") / 4 + -parseInt("2963385fIrjod") / 5 * (-parseInt("6msqNOP") / 6) + parseInt("543032pcbaMR") / 7 * (-parseInt("40BrQCYM") / 8) + -parseInt("1103850cZRIjJ") / 9 * (parseInt("50rAYhOB") / 10) + parseInt("5136868EpdNBC") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 423820);
function Main(s) {
  s = s.trim()["split"]("\n");
  const n = Number(s[0]);
  const p = s[1]["trim"]()["split"](" ").map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    let flg = true;
    let t = p["slice"](0, i);
    let x = 0;
    while (x < t["length"] - 1) {
      if (t[x] < p[i - 1]) {
        flg = false;
      }
      x++;
    }
    if (flg) {
      cnt++;
    }
  }
  console["log"](cnt);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(uBATma, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 437;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uBATma, key);
}
function __STRING_ARRAY__() {
  const _0x57696a = ["readFileSync", "5136868EpdNBC", "utf8", "length", "log", "trim", "1103850cZRIjJ", "543032pcbaMR", "600402LVDRTv", "117479Yaaurr", "6msqNOP", "split", "40BrQCYM", "50rAYhOB", "2158892AeSSLe", "slice", "12UllYrY", "2963385fIrjod"];
  __STRING_ARRAY__ = function () {
    return _0x57696a;
  };
  return __STRING_ARRAY__();
}
