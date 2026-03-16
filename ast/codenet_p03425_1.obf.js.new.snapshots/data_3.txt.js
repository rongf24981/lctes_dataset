'use strict';

function __DECODE_0__(LDakyj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LDakyj, key);
}
function __STRING_ARRAY__() {
  const _0x44aedf = ["log", "15868vHiQve", "slice", "167321zziZXD", "7deonHH", "/dev/stdin", "7941357wfnjXS", "utf8", "327CepsVD", "split", "7510drRmyr", "311104oEBbxx", "2282862XnTNDJ", "5005330gjSXOZ", "137SFijHF", "trim", "690ZzNJti"];
  __STRING_ARRAY__ = function () {
    return _0x44aedf;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("137SFijHF") / 1 * (-parseInt("7510drRmyr") / 2) + -parseInt("327CepsVD") / 3 * (parseInt("15868vHiQve") / 4) + parseInt("5005330gjSXOZ") / 5 + -parseInt("2282862XnTNDJ") / 6 * (parseInt("7deonHH") / 7) + parseInt("311104oEBbxx") / 8 + parseInt("7941357wfnjXS") / 9 + parseInt("690ZzNJti") / 10 * (-parseInt("167321zziZXD") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 574323);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0]);
  const names = arg["slice"](1, N + 1);
  const p = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2];
  const q = [1, 1, 1, 2, 2, 3, 2, 2, 3, 3];
  const r = [2, 3, 4, 3, 4, 4, 3, 4, 4, 4];
  let march = [0, 0, 0, 0, 0];
  for (let i in names) {
    if (names[i][0] === "M") {
      march[0]++;
    }
    if (names[i][0] === "A") {
      march[1]++;
    }
    if (names[i][0] === "R") {
      march[2]++;
    }
    if (names[i][0] === "C") {
      march[3]++;
    }
    if (names[i][0] === "H") {
      march[4]++;
    }
  }
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    answer += march[p[i]] * march[q[i]] * march[r[i]];
  }
  console["log"](answer);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
