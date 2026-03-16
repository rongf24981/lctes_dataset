'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("214254GATCRS") / 1 * (parseInt("2LhEKgk") / 2) + parseInt("39nhUIoh") / 3 * (-parseInt("210836MNChDN") / 4) + -parseInt("3625310ojuctS") / 5 * (parseInt("6dnbyGQ") / 6) + parseInt("313579pYgErW") / 7 * (parseInt("184qpNZGY") / 8) + -parseInt("4761vWvuet") / 9 * (-parseInt("15920zBVHKj") / 10) + -parseInt("11jPkKNL") / 11 * (-parseInt("389616iKMbVa") / 12) + -parseInt("2006537pMTWjM") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 554593);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0]);
  const A = arg[1]["split"](" ")["map"](n => parseInt(n))["sort"]((a, b) => a - b);
  let pairNums = [];
  for (let i in A) {
    if (A[i] === A[parseInt(i) + 1]) {
      pairNums["push"](A[i]);
    }
  }
  pairNums["sort"]((a, b) => b - a);
  const set = new Set(pairNums);
  console["log"](pairNums.length ? [...set][0] * [...set][1] : 0);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(NJsyzP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 479;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJsyzP, key);
}
function __STRING_ARRAY__() {
  const _0x5a60cf = ["214254GATCRS", "39nhUIoh", "log", "15920zBVHKj", "sort", "11jPkKNL", "389616iKMbVa", "readFileSync", "2LhEKgk", "split", "6dnbyGQ", "2006537pMTWjM", "313579pYgErW", "/dev/stdin", "trim", "map", "210836MNChDN", "3625310ojuctS", "push", "4761vWvuet", "184qpNZGY"];
  __STRING_ARRAY__ = function () {
    return _0x5a60cf;
  };
  return __STRING_ARRAY__();
}
