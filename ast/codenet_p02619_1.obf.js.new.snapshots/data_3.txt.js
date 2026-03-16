'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("7RrLtDh") / 1 * (parseInt("30934MzqQgD") / 2) + parseInt("181710rbwjun") / 3 + -parseInt("5924QMZMWb") / 4 * (-parseInt("745OgmYyA") / 5) + -parseInt("637044lCohpt") / 6 + -parseInt("302736cpBgIX") / 7 + -parseInt("4516008jGtXXi") / 8 + parseInt("6922719VFNRoI") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 444776);
function __STRING_ARRAY__() {
  const _0x3e8fdb = ["slice", "5924QMZMWb", "fill", "181710rbwjun", "readFileSync", "/dev/stdin", "4516008jGtXXi", "7RrLtDh", "302736cpBgIX", "length", "6922719VFNRoI", "log", "637044lCohpt", "745OgmYyA", "map", "split", "30934MzqQgD"];
  __STRING_ARRAY__ = function () {
    return _0x3e8fdb;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LVfovk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 372;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LVfovk, key);
}
function Main(input) {
  const tmp = input.trim()["split"]("\n");
  const D = Number(tmp[0]);
  const C = tmp[1]["split"](" ")["map"](v => Number(v));
  const S = tmp["slice"](2, 7)["map"](v => v["split"](" ")["map"](v => Number(v)));
  const T = tmp["slice"](-5)["map"](v => Number(v));
  let LastContestDays = Array(26)["fill"](0);
  let currnetContestLebels = Array(26)["fill"](0);
  let lebel = 0;
  for (let i = 1; i <= D; i++) {
    LastContestDays[T[i - 1] - 1] = i;
    for (let j = 0; j < C["length"]; j++) {
      if (LastContestDays[j] === i) {
        currnetContestLebels[j] = S[i - 1][j];
      } else {
        currnetContestLebels[j] = C[j] * (i - LastContestDays[j]) * -1;
      }
    }
    lebel += currnetContestLebels.reduce((acc, cur) => acc + cur);
    console["log"](String(lebel));
  }
  return;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
