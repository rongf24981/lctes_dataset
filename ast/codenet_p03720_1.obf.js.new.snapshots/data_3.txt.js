'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("124577amMbzX") / 1 + parseInt("15586YeQGjX") / 2 * (parseInt("21BtxbgY") / 3) + parseInt("8VEOKxL") / 4 * (parseInt("2383190atIbsO") / 5) + parseInt("4979952PffUkY") / 6 + -parseInt("2623649ovsGFA") / 7 + -parseInt("38040gCuSne") / 8 * (-parseInt("9OHoIoE") / 9) + -parseInt("10794280EUEwcw") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 512916);
function __DECODE_0__(zHAwvM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 175;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zHAwvM, key);
}
let lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
let N = +lines[0]["split"](" ")[0];
let ABs = lines["slice"](1)["map"](line => line["split"](" ").map(Number));
let res = [];
for (let i = 0; i < N; i++) {
  res[i] = 0;
}
function __STRING_ARRAY__() {
  const _0x4982a3 = ["124577amMbzX", "10794280EUEwcw", "/dev/stdin", "4979952PffUkY", "forEach", "readFileSync", "slice", "2383190atIbsO", "map", "15586YeQGjX", "log", "split", "2623649ovsGFA", "9OHoIoE", "8VEOKxL", "21BtxbgY", "utf8", "38040gCuSne"];
  __STRING_ARRAY__ = function () {
    return _0x4982a3;
  };
  return __STRING_ARRAY__();
}
ABs["forEach"](ab => {
  res[ab[0] - 1]++;
  res[ab[1] - 1]++;
});
res.forEach(n => console["log"](n));
