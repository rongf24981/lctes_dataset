'use strict';

function __DECODE_0__(NblPLp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NblPLp, key);
}
function __STRING_ARRAY__() {
  const _0x2e197b = ["5945272ewCdUh", "2005633NYYZjS", "2HWyQDR", "18yIKnOF", "4JKLGaC", "/dev/stdin", "3945635Wborjl", "32629392icahtc", "11gkPFtz", "utf8", "9GKtJBZ", "split", "readFileSync", "map", "log", "1561863zpqJXQ", "232068Zrmuzs", "filter", "reduce", "5912710VbJQLK"];
  __STRING_ARRAY__ = function () {
    return _0x2e197b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("232068Zrmuzs") / 1 + -parseInt("2HWyQDR") / 2 * (parseInt("1561863zpqJXQ") / 3) + -parseInt("4JKLGaC") / 4 * (parseInt("3945635Wborjl") / 5) + -parseInt("18yIKnOF") / 6 * (-parseInt("2005633NYYZjS") / 7) + -parseInt("5945272ewCdUh") / 8 * (parseInt("9GKtJBZ") / 9) + parseInt("5912710VbJQLK") / 10 * (-parseInt("11gkPFtz") / 11) + parseInt("32629392icahtc") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 702427);
function main(input) {
  const inputs = input["split"]("\n")["filter"](x => x !== "");
  const s = inputs[0];
  const result = s["split"]("")["map"]((input, index) => input === "W" ? index : -1)["filter"](x => x !== -1)["reduce"]((acc, cur, index) => acc + cur - index, 0);
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
