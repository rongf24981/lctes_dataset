'use strict';

function __STRING_ARRAY__() {
  const _0x1330e3 = ["map", "913746ZuTwin", "3894940nPGqdd", "trim", "max", "/dev/stdin", "readFileSync", "1158hDCRrk", "split", "toString", "31493344TNPaFe", "7249515stAdRg", "log", "2753138qtGXcz", "33885BuTnFl", "push", "fill", "800045YpmrUm"];
  __STRING_ARRAY__ = function () {
    return _0x1330e3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("800045YpmrUm") / 1 + -parseInt("2753138qtGXcz") / 2 + -parseInt("913746ZuTwin") / 3 + -parseInt("3894940nPGqdd") / 4 + parseInt("33885BuTnFl") / 5 * (parseInt("1158hDCRrk") / 6) + -parseInt("7249515stAdRg") / 7 + parseInt("31493344TNPaFe") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 754053);
function __DECODE_0__(NQSrsp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 363;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NQSrsp, key);
}
console["log"](function (args) {
  const tmp = args["trim"]()["split"]("\n").map(r => r["split"](" ")["map"](v => v | 0));
  const N = tmp[0][0];
  const M = tmp[0][1];
  const x = [];
  const y = [];
  for (let i = 0; i < M; i++) {
    x["push"](tmp[1 + i][0]);
    y["push"](tmp[1 + i][1]);
  }
  const dp = Array(M + 1)["fill"](0)["map"](_ => Array(N + 1).fill(0));
  for (let i = 1; i <= M; i++) {
    for (let j = 0; j < M; j++) {
      dp[i][y[j]] = Math["max"](dp[i][y[j]], dp[i - 1][x[j]] + 1);
    }
  }
  return Math["max"](...dp[M])["toString"]();
}(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
