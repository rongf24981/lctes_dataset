'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("191958ESuJTd") / 1 + -parseInt("2MHilTd") / 2 * (-parseInt("249636CUCLwC") / 3) + parseInt("224380OhzQfL") / 4 + -parseInt("1661680xzydFJ") / 5 + -parseInt("894svmKYB") / 6 * (parseInt("14714ulbwpA") / 7) + parseInt("815640SHJjFr") / 8 * (parseInt("18gqSJpe") / 9) + parseInt("10AOMEXQ") / 10 * (parseInt("3117741MInOel") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 173072);
function Main(INPUT) {
  const input = INPUT["split"]("\n")[0].split(" ");
  const A = parseInt(input[0], 10);
  const B = parseInt(input[1], 10);
  console["log"](A + B >= 10 ? "error" : A + B);
}
function __DECODE_0__(kUaRVq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 349;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kUaRVq, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x1aa8c7 = ["split", "readFileSync", "10AOMEXQ", "utf8", "2MHilTd", "log", "error", "3117741MInOel", "14714ulbwpA", "249636CUCLwC", "894svmKYB", "224380OhzQfL", "191958ESuJTd", "18gqSJpe", "815640SHJjFr", "1661680xzydFJ"];
  __STRING_ARRAY__ = function () {
    return _0x1aa8c7;
  };
  return __STRING_ARRAY__();
}
