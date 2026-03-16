'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("31888GMYiXc") / 1 + -parseInt("34bYwZSw") / 2 * (-parseInt("46719oRaqoT") / 3) + parseInt("724492tjSjnn") / 4 + parseInt("286200uSeXVl") / 5 + parseInt("1849764WXAyoN") / 6 + -parseInt("3201751WOoEMX") / 7 + -parseInt("208cTjPjk") / 8 * (-parseInt("39519TNmjyb") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 436283);
const input = require("fs").readFileSync("/dev/stdin", "utf8")["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  const _0x3f6402 = ["log", "31888GMYiXc", "39519TNmjyb", "map", "/dev/stdin", "exit", "34bYwZSw", "split", "slice", "724492tjSjnn", "3201751WOoEMX", "Yes", "286200uSeXVl", "utf8", "46719oRaqoT", "1849764WXAyoN", "208cTjPjk", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x3f6402;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QBwPSl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 450;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QBwPSl, key);
}
const NM = input[0].split(" ")["map"](Number);
const N = NM[0];
const M = NM[1];
const As = input["slice"](1, N + 1);
const Bs = input["slice"](N + 1, N + M + 1);
for (let ax = 0; ax < N - M; ax++) {
  for (let ay = 0; ay < N - M; ay++) {
    let flag = true;
    for (let bx = 0; bx < M; bx++) {
      for (let by = 0; by < M; by++) {
        if (As[ax + bx][ay + by] !== Bs[bx][by]) {
          flag = false;
          break;
        }
      }
      if (!flag) {
        break;
      }
    }
    if (flag) {
      console["log"]("Yes");
      process["exit"](0);
    }
  }
}
console["log"]("No");
