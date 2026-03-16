'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1159339KqzkxY") / 1 * (-parseInt("2ekdKaV") / 2) + parseInt("262344fGZztL") / 3 + -parseInt("120HAGrGo") / 4 * (-parseInt("90765SJinDn") / 5) + -parseInt("4241544HKuIax") / 6 + parseInt("1183NAPqWV") / 7 * (parseInt("17960JSVFFU") / 8) + -parseInt("5627592MNBBTd") / 9 + parseInt("10YpZmfB") / 10 * (-parseInt("1739617fPBYww") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 680423);
function __STRING_ARRAY__() {
  const _0x17dfb7 = ["1183NAPqWV", "5627592MNBBTd", "2ekdKaV", "map", "262344fGZztL", "log", "120HAGrGo", "utf8", "10YpZmfB", "4241544HKuIax", "split", "trim", "17960JSVFFU", "1739617fPBYww", "1159339KqzkxY", "90765SJinDn"];
  __STRING_ARRAY__ = function () {
    return _0x17dfb7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WBaqMN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 474;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WBaqMN, key);
}
const Main = arg => {
  let input = arg["trim"]()["split"]("\n");
  let n = parseInt(input[0]);
  let pArr = input[1]["split"](" ")["map"](Number);
  let count = 0;
  for (let i = 1; i - 1 < n; i++) {
    if (pArr[i - 1] < pArr[i] && pArr[i] < pArr[i + 1] || pArr[i + 1] < pArr[i] && pArr[i] < pArr[i - 1]) {
      count += 1;
    }
  }
  console["log"](count);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
