'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("304867QHGbbJ") / 1 + parseInt("2lOsPdW") / 2 * (parseInt("1200999rCkTRj") / 3) + parseInt("2503064YChZrC") / 4 + -parseInt("49845GdVyYI") / 5 * (parseInt("300gMgVsh") / 6) + parseInt("1718563SKnRDm") / 7 + -parseInt("216zPxrGQ") / 8 * (parseInt("75735QECXgN") / 9) + -parseInt("5266600BlRSGu") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 324160);
function __STRING_ARRAY__() {
  const _0x44d24e = ["5266600BlRSGu", "2lOsPdW", "log", "216zPxrGQ", "49845GdVyYI", "75735QECXgN", "300gMgVsh", "map", "split", "sort", "1200999rCkTRj", "304867QHGbbJ", "trim", "1718563SKnRDm", "2503064YChZrC", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x44d24e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gXJfAz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gXJfAz, key);
}
function Main(input) {
  const params = input.trim()["split"]("\n");
  const N = Number(params[0].trim());
  const sortedA = params[1]["trim"]()["split"](" ")["map"](Number)["sort"]((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < N; i++) {
    total += sortedA[i * 2 + 1];
  }
  console["log"](total);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
