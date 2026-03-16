'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("508764ofKoOS") / 1 + -parseInt("4UoRZXR") / 2 * (-parseInt("1255971vPpECs") / 3) + -parseInt("3807860HtfDcW") / 4 + parseInt("2503145BAprPz") / 5 + -parseInt("1176PlSVOI") / 6 * (parseInt("6713qJGOem") / 7) + parseInt("8XeQzpA") / 8 * (parseInt("1096974GEUgwB") / 9) + -parseInt("2741310eRQChe") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 554533);
function __STRING_ARRAY__() {
  const _0x85e9f1 = ["pow", "508764ofKoOS", "shift", "readFileSync", "length", "6713qJGOem", "3807860HtfDcW", "1176PlSVOI", "1255971vPpECs", "2503145BAprPz", "utf8", "4UoRZXR", "8XeQzpA", "log", "1096974GEUgwB", "max", "2741310eRQChe"];
  __STRING_ARRAY__ = function () {
    return _0x85e9f1;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const x = Number(s);
  const nums = [...Array(31)].map((x, i) => i + 1);
  nums["shift"]();
  const max_ary = [1];
  for (let i = 0; i < nums["length"]; i++) {
    let j = 2;
    let n = nums[i];
    let max = Math.pow(n, j);
    if (max > x) {
      continue;
    }
    while (max <= x) {
      j += 1;
      max = Math["pow"](n, j);
    }
    max = Math["pow"](n, j - 1);
    max_ary.push(max);
  }
  const ans = Math["max"](...max_ary);
  console["log"](ans);
}
function __DECODE_0__(fbczQD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 494;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fbczQD, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
