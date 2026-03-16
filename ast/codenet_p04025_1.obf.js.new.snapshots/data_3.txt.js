'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1YkJEXk") / 1 * (parseInt("417206RZmZMR") / 2) + -parseInt("892248yOsgqn") / 3 + -parseInt("1265132rJtpEb") / 4 + -parseInt("105780MUHvbY") / 5 + parseInt("6MoYZLB") / 6 * (-parseInt("85393YZzaRM") / 7) + -parseInt("2462344UrxNBE") / 8 + -parseInt("13167LwtAof") / 9 * (-parseInt("6270wTrpJh") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 171057);
let input = require("fs").readFileSync("/dev/stdin", "utf8");
const info = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  const _0x53d40c = ["utf8", "6MoYZLB", "log", "2462344UrxNBE", "split", "round", "417206RZmZMR", "/dev/stdin", "pow", "6270wTrpJh", "trim", "105780MUHvbY", "map", "85393YZzaRM", "1265132rJtpEb", "1YkJEXk", "13167LwtAof", "892248yOsgqn"];
  __STRING_ARRAY__ = function () {
    return _0x53d40c;
  };
  return __STRING_ARRAY__();
}
const nums = info[1].split(" ")["map"](x => x * 1);
const ave = Math["round"](nums.reduce((x, a) => {
  return a += x;
}) / info[0]);
let sum = 0;
for (let i = 0; i < info[0]; i++) {
  sum += Math["pow"](nums[i] - ave, 2);
}
function __DECODE_0__(iBzkVU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 203;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iBzkVU, key);
}
console["log"](sum);
