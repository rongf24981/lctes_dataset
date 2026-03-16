'use strict';

function __DECODE_0__(RrRpxe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 204;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RrRpxe, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("250426LAubuP") / 1 + parseInt("1068026rbmSyb") / 2 + -parseInt("1635186BNjlYs") / 3 + parseInt("2713232VkFXqb") / 4 + parseInt("25JEVyjf") / 5 * (-parseInt("824214ecYSvK") / 6) + -parseInt("567Iygaoy") / 7 * (-parseInt("54744MhfkqI") / 8) + parseInt("27pqDAYZ") / 9 * (parseInt("494990FDEixE") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 432768);
function Main(input) {
  input = input["trim"]().split("\n");
  const array = input[0]["split"](" ")["map"](s => parseInt(s));
  const rest = input.slice(1);
  const H = array[0];
  const N = array[1];
  const magic = [];
  for (let i = 0; i < rest["length"]; ++i) {
    const a = rest[i]["split"](" ")["map"](s => parseInt(s));
    magic["push"]([a[0], a[1]]);
  }
  magic.sort((a, b) => a[0] - b[0]);
  let dp = Array(H + 1)["fill"](Infinity);
  dp[0] = 0;
  for (let i = 0; i < N; ++i) {
    const w = magic[i][0];
    const v = magic[i][1];
    for (let j = 0; j <= H; ++j) {
      const min = Math.min(j + w, H);
      dp[min] = Math["min"](dp[min], dp[j] + v);
    }
  }
  console["log"](dp[H]);
}
function __STRING_ARRAY__() {
  const _0x2cd053 = ["1068026rbmSyb", "split", "54744MhfkqI", "250426LAubuP", "/dev/stdin", "1635186BNjlYs", "trim", "log", "readFileSync", "2713232VkFXqb", "824214ecYSvK", "494990FDEixE", "push", "25JEVyjf", "map", "utf8", "27pqDAYZ", "fill", "length", "567Iygaoy", "min"];
  __STRING_ARRAY__ = function () {
    return _0x2cd053;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
