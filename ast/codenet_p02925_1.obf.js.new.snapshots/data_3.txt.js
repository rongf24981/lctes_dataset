'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("302KItoSF") / 1 * (parseInt("446KGBZkc") / 2) + parseInt("18hntMCj") / 3 * (-parseInt("184612JzVfmH") / 4) + -parseInt("5301790VIbxEv") / 5 + -parseInt("9017202mVGCIJ") / 6 + -parseInt("6804462xaFELL") / 7 + parseInt("13149912CCThUi") / 8 + -parseInt("5294943OSAhEc") / 9 * (-parseInt("50GzHbbJ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 840511);
function main(stdin) {
  const input = stdin.split("\n");
  const N = Number(input.shift());
  const params = input["map"](p => p["split"](" ").map(v => parseInt(v, 10)));
  console["log"](solve(params));
}
function __DECODE_0__(MGTTtq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 423;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MGTTtq, key);
}
function solve(params) {
  const l = params["length"];
  function matching() {
    let matched = false;
    for (let i = 0; i < l; ++i) {
      const op = params[i][cur[i]] - 1;
      if (isNaN(op)) {
        continue;
      }
      if (params[op][cur[op]] - 1 === i) {
        matched = true;
        ++cur[i];
        ++cur[op];
      }
    }
    return matched;
  }
  function isNotCompleted() {
    return cur["some"](v => v < l - 1);
  }
  const cur = [];
  for (let i = 0; i < l; ++i) {
    cur[i] = 0;
  }
  let day = 1;
  while (isNotCompleted()) {
    const res = matching();
    if (res === false) {
      return -1;
    }
    ++day;
  }
  return day;
}
main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
function __STRING_ARRAY__() {
  const _0x54330b = ["some", "/dev/stdin", "5301790VIbxEv", "446KGBZkc", "split", "13149912CCThUi", "6804462xaFELL", "50GzHbbJ", "length", "184612JzVfmH", "18hntMCj", "302KItoSF", "map", "trim", "9017202mVGCIJ", "utf8", "log", "5294943OSAhEc"];
  __STRING_ARRAY__ = function () {
    return _0x54330b;
  };
  return __STRING_ARRAY__();
}
