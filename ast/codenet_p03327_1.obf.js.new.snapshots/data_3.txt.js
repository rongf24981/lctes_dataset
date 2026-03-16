'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("600138dOzuco") / 1 + parseInt("24678BQvKdl") / 2 * (-parseInt("201hyMQyW") / 3) + parseInt("4236824JvIUmy") / 4 + parseInt("391630MNzhMp") / 5 + parseInt("1026xDQKrs") / 6 * (parseInt("25655iMnmaa") / 7) + parseInt("32RdlvtK") / 8 * (-parseInt("968706gTOfeO") / 9) + -parseInt("5358520AKUhyp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 571284);
function __STRING_ARRAY__() {
  const _0xcf33ae = ["600138dOzuco", "ABD", "5358520AKUhyp", "201hyMQyW", "4236824JvIUmy", "/dev/stdin", "32RdlvtK", "968706gTOfeO", "utf8", "log", "24678BQvKdl", "ABC", "trim", "25655iMnmaa", "readFileSync", "1026xDQKrs", "391630MNzhMp"];
  __STRING_ARRAY__ = function () {
    return _0xcf33ae;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const N = Number(input);
  if (N <= 999) {
    console.log("ABC");
  } else {
    console["log"]("ABD");
  }
}
function __DECODE_0__(mVdTEq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mVdTEq, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
