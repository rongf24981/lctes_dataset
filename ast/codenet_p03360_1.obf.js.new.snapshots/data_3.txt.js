'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("42drbnao") / 1 * (parseInt("55914kTETeh") / 2) + -parseInt("105ABbvrj") / 3 * (-parseInt("111168zkpNhi") / 4) + -parseInt("70vKdNXC") / 5 * (-parseInt("408588kPteRJ") / 6) + parseInt("6032586lyvHFa") / 7 + -parseInt("11463072qeMtdi") / 8 + -parseInt("9wACoxz") / 9 * (parseInt("2754650BsyCtJ") / 10) + -parseInt("16296181IHkxdV") / 11 * (parseInt("12cvntfS") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 772264);
function __DECODE_0__(vkFCmm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 302;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vkFCmm, key);
}
const main = input => {
  input = input["split"]("\n");
  const nums = input[0]["split"](" ")["map"](i => parseInt(i));
  const K = parseInt(input[1]);
  nums.sort((a, b) => a - b);
  let n = nums["pop"]();
  n = n * Math["pow"](2, K);
  nums["push"](n);
  console["log"](nums["reduce"]((p, c) => p + c));
};
function __STRING_ARRAY__() {
  const _0x4d1579 = ["log", "reduce", "pop", "70vKdNXC", "408588kPteRJ", "105ABbvrj", "111168zkpNhi", "readFileSync", "42drbnao", "2754650BsyCtJ", "11463072qeMtdi", "9wACoxz", "push", "map", "6032586lyvHFa", "utf-8", "split", "16296181IHkxdV", "12cvntfS", "/dev/stdin", "pow", "55914kTETeh"];
  __STRING_ARRAY__ = function () {
    return _0x4d1579;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
