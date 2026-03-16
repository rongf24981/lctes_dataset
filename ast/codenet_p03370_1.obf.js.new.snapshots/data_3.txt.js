'use strict';

function __DECODE_0__(HQNSmy, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 444;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HQNSmy, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("96377qbFtLh") / 1 + parseInt("442562VdqlKz") / 2 * (-parseInt("3HNNAwN") / 3) + -parseInt("4XYzCcM") / 4 * (-parseInt("28510IcWMAx") / 5) + -parseInt("2437914rLBJQq") / 6 + -parseInt("2618868RGuQug") / 7 + parseInt("870096PafoVT") / 8 + -parseInt("223623nANPgA") / 9 * (-parseInt("410IrKEHP") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 227844);
function __STRING_ARRAY__() {
  const _0x437812 = ["shift", "3HNNAwN", "readFileSync", "reduce", "442562VdqlKz", "2437914rLBJQq", "870096PafoVT", "/dev/stdin", "410IrKEHP", "split", "96377qbFtLh", "28510IcWMAx", "log", "utf8", "floor", "2618868RGuQug", "223623nANPgA", "4XYzCcM"];
  __STRING_ARRAY__ = function () {
    return _0x437812;
  };
  return __STRING_ARRAY__();
}
let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
input = input["split"]("\n");
let info = input["shift"]();
let N = info["split"](" ")[0] * 1;
let X = info["split"](" ")[1];
let arr = input.map(x => x * 1);
let min = Math.min(...arr);
let sum = arr["reduce"]((x, a) => {
  return a + x;
});
let ans = N + Math["floor"]((X - sum) / min);
console["log"](ans);
