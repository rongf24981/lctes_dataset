(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1271CeVySz") / 1 * (parseInt("1174heqgld") / 2) + -parseInt("2862AFLMFz") / 3 * (parseInt("3808XnjeRE") / 4) + parseInt("1188290auFDfA") / 5 + -parseInt("6pGLFDt") / 6 * (parseInt("4541453bNeSup") / 7) + parseInt("5384vtTurj") / 8 * (parseInt("11331PSXybx") / 9) + parseInt("4269520SFQUHu") / 10 + -parseInt("2334123UtkItL") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 488814);
function __DECODE_0__(encvGK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 340;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(encvGK, key);
}
console["log"](function (args) {
  const tmp = args["trim"]()["split"]("\n")["map"](r => r["split"](" "));
  const N = tmp["shift"]()[0] | 0;
  const p = tmp[0]["map"](parseFloat);
  const dp = Array(N)["fill"](0)["map"](r => Array(N + 1).fill(0));
  dp[0][0] = 1 - p[0];
  dp[0][1] = p[0];
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j <= i + 1; j++) {
      dp[i + 1][j + 1] += dp[i][j] * p[i + 1];
      dp[i + 1][j] += dp[i][j] * (1 - p[i + 1]);
    }
  }
  return dp[N - 1]["slice"]((N + 1) / 2)["reduce"]((a, b) => a + b).toString();
}(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x3916c9 = ["/dev/stdin", "4269520SFQUHu", "6pGLFDt", "slice", "2334123UtkItL", "1271CeVySz", "shift", "utf8", "4541453bNeSup", "fill", "1174heqgld", "3808XnjeRE", "1188290auFDfA", "11331PSXybx", "split", "2862AFLMFz", "5384vtTurj", "readFileSync", "map", "reduce", "log", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x3916c9;
  };
  return __STRING_ARRAY__();
}
