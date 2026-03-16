'use strict';

function __DECODE_0__(dtUaoQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 323;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dtUaoQ, key);
}
function __STRING_ARRAY__() {
  const _0x656575 = ["7007DyYKDF", "split", "3092665uCgSPZ", "886827dYNxMb", "4269844nemQsp", "4wiaomw", "3642328KDMkNo", "log", "/dev/stdin", "trim", "6873696ssYhah", "1968wcGXjW", "417325VVezqv", "Hello World"];
  __STRING_ARRAY__ = function () {
    return _0x656575;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("417325VVezqv") / 1 + -parseInt("4wiaomw") / 2 * (parseInt("886827dYNxMb") / 3) + parseInt("4269844nemQsp") / 4 + parseInt("3092665uCgSPZ") / 5 + parseInt("1968wcGXjW") / 6 * (parseInt("7007DyYKDF") / 7) + -parseInt("3642328KDMkNo") / 8 + -parseInt("6873696ssYhah") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 621394);
const main = input => {
  const args = input["trim"]()["split"]("\n");
  const n = parseInt(args[0], 10);
  if (n === 1) {
    console["log"]("Hello World");
  } else {
    const a = parseInt(args[1], 10);
    const b = parseInt(args[2], 10);
    console["log"](a + b);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
