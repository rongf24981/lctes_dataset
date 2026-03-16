'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("419589kmcSXR") / 1 + -parseInt("16MSTIeN") / 2 * (parseInt("299139OtibDr") / 3) + parseInt("3326116VHWgnC") / 4 * (parseInt("5dpDICg") / 5) + parseInt("9465522CCnoSy") / 6 + -parseInt("1213233rKwUWy") / 7 * (-parseInt("40GAODdL") / 8) + parseInt("25227ACwjjG") / 9 * (parseInt("3580hlVXHn") / 10) + -parseInt("24903318CUkuWQ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 797954);
function __DECODE_0__(cXGCKK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cXGCKK, key);
}
function Main(input) {
  input = input["split"](/\s+/);
  var H = input["shift"]() - 0;
  var W = input["shift"]() - 0;
  var N = input["shift"]() - 0;
  var sr = input.shift() - 0;
  var sc = input["shift"]() - 0;
  var S = input.shift();
  var T = input["shift"]();
  var dp = [[sc, sc, sr, sr]];
  for (let i = 0; i < N; i++) {
    dp[i + 1] = [];
    dp[i + 1][0] = dp[i][0] - (S[i] === "L" ? 1 : 0);
    dp[i + 1][1] = dp[i][1] + (S[i] === "R" ? 1 : 0);
    dp[i + 1][2] = dp[i][2] - (S[i] === "U" ? 1 : 0);
    dp[i + 1][3] = dp[i][3] + (S[i] === "D" ? 1 : 0);
    if (dp[i + 1][0] === 0 || dp[i + 1][1] === W + 1 || dp[i + 1][2] === 0 || dp[i + 1][3] === H + 1) {
      console["log"]("NO");
      return;
    }
    dp[i + 1][0] = Math["min"](dp[i + 1][0] + (T[i] === "R" ? 1 : 0), W);
    dp[i + 1][1] = Math["max"](dp[i + 1][1] - (T[i] === "L" ? 1 : 0), 1);
    dp[i + 1][2] = Math["min"](dp[i + 1][2] + (T[i] === "D" ? 1 : 0), H);
    dp[i + 1][3] = Math.max(dp[i + 1][3] - (T[i] === "U" ? 1 : 0), 1);
  }
  console["log"]("YES");
}
function __STRING_ARRAY__() {
  var _0x16c9c5 = ["40GAODdL", "readFileSync", "5dpDICg", "max", "3580hlVXHn", "log", "24903318CUkuWQ", "16MSTIeN", "25227ACwjjG", "9465522CCnoSy", "3326116VHWgnC", "419589kmcSXR", "split", "YES", "1213233rKwUWy", "299139OtibDr", "shift", "min"];
  __STRING_ARRAY__ = function () {
    return _0x16c9c5;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
