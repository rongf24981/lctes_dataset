'use strict';

function __DECODE_0__(KfYdvk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 286;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KfYdvk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("39787iQKrsH") / 1 * (-parseInt("8xJaeaa") / 2) + parseInt("42mimNKo") / 3 * (parseInt("58868KmbnSd") / 4) + parseInt("2059370tjRyOF") / 5 + -parseInt("6362442mMxfQg") / 6 + parseInt("4235oZmEvW") / 7 * (-parseInt("944QrBBUv") / 8) + -parseInt("2190924gFxfFL") / 9 + parseInt("11300620WflGXP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 531889);
function main(s) {
  const houses = s["split"]("\n")[1]["split"](" ")["map"](n => Number(n));
  const min = Math["min"](...houses);
  const max = Math["max"](...houses);
  const answer = max - min;
  console["log"](answer);
}
function __STRING_ARRAY__() {
  const _0x3da472 = ["readFileSync", "944QrBBUv", "2190924gFxfFL", "6362442mMxfQg", "11300620WflGXP", "58868KmbnSd", "min", "log", "/dev/stdin", "split", "utf8", "map", "2059370tjRyOF", "39787iQKrsH", "42mimNKo", "8xJaeaa", "4235oZmEvW", "max"];
  __STRING_ARRAY__ = function () {
    return _0x3da472;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
