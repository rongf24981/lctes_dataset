'use strict';

function __DECODE_0__(xaapwE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xaapwE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("4049JImjVr") / 1 * (-parseInt("502HOuIjW") / 2) + parseInt("1257057GEWSTJ") / 3 + -parseInt("516dAbktU") / 4 * (parseInt("7945PddMJH") / 5) + parseInt("1481970QvXRCS") / 6 + -parseInt("5521026TckTJh") / 7 + parseInt("632NnUaQr") / 8 * (-parseInt("16362NcEpux") / 9) + parseInt("20090160rdlifJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 521410);
function __STRING_ARRAY__() {
  const _0x422186 = ["1257057GEWSTJ", "502HOuIjW", "20090160rdlifJ", "min", "516dAbktU", "632NnUaQr", "7945PddMJH", "16362NcEpux", "utf8", "5521026TckTJh", "fill", "4049JImjVr", "readFileSync", "push", "split", "1481970QvXRCS"];
  __STRING_ARRAY__ = function () {
    return _0x422186;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const inputs = input["split"]("\n");
  const L = Number(inputs[0]);
  const A = [];
  for (let i = 0; i < L; i++) {
    A["push"](Number(inputs[i + 1]));
  }
  const dp = Array(L + 1)["fill"]().map(() => Array(5).fill());
  dp[0] = [0, 0, 0, 0, 0];
  for (let i = 1; i <= L; i++) {
    let cur = A[i - 1];
    let curEven = A[i - 1] === 0 ? 2 : cur % 2;
    let curOdd = (cur + 1) % 2;
    dp[i][0] = dp[i - 1][0] + cur;
    dp[i][1] = Math["min"](dp[i - 1][0], dp[i - 1][1]) + curEven;
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + curOdd;
    dp[i][3] = Math["min"](dp[i - 1][2], dp[i - 1][3]) + curEven;
    dp[i][4] = Math.min(dp[i - 1][2], dp[i - 1][3], dp[i - 1][4]) + cur;
  }
  console.log(Math.min(...dp[L]));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
