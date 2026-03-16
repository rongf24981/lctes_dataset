'use strict';

function __DECODE_0__(YMLyHP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 434;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YMLyHP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("137166uXIuqY") / 1 + -parseInt("4zeJNMi") / 2 * (parseInt("607737uIQbmX") / 3) + parseInt("806436Zrtunu") / 4 + -parseInt("3293795tljjAd") / 5 + parseInt("2531856nQBsYH") / 6 + parseInt("112BATGDp") / 7 * (-parseInt("95648DMPNso") / 8) + parseInt("7741980umQwZv") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 365758);
function __STRING_ARRAY__() {
  const _0x4b197b = ["4zeJNMi", "2531856nQBsYH", "fill", "7741980umQwZv", "607737uIQbmX", "log", "trim", "/dev/stdin", "utf8", "137166uXIuqY", "readFileSync", "95648DMPNso", "3293795tljjAd", "806436Zrtunu", "112BATGDp", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4b197b;
  };
  return __STRING_ARRAY__();
}
function main(inp) {
  inp = inp["trim"]();
  const MOD = 1000000007;
  let dp = [new Array(13)["fill"](0)];
  dp[0][0] = 1;
  for (let i = 0; i < inp["length"]; i++) {
    dp[i + 1] = new Array(13)["fill"](0);
    const c = inp[i] === "?" ? -1 : inp[i] - 0;
    for (let j = 0; j < 10; j++) {
      if (c !== -1 && c !== j) {
        continue;
      }
      for (let k = 0; k < 13; k++) {
        dp[i + 1][(k * 10 + j) % 13] += dp[i][k];
      }
    }
    for (let j = 0; j < 13; j++) {
      dp[i + 1][j] %= MOD;
    }
  }
  console["log"](dp[inp["length"]][5]);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
