'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1203746loVdNP") / 1 * (parseInt("2fQZGkf") / 2) + -parseInt("1894269XDOMUL") / 3 + -parseInt("42556NRVFEK") / 4 * (-parseInt("5xEjamX") / 5) + -parseInt("5386710aedeto") / 6 + parseInt("3641351hAANDZ") / 7 * (parseInt("8RXqZsj") / 8) + parseInt("513MkAByL") / 9 * (parseInt("231930XvBmwE") / 10) + parseInt("11QpPtiO") / 11 * (parseInt("18606348DtmiDC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 670408);
function __STRING_ARRAY__() {
  const _0x577d58 = ["2fQZGkf", "5xEjamX", "8RXqZsj", "231930XvBmwE", "log", "42556NRVFEK", "18606348DtmiDC", "5386710aedeto", "/dev/stdin", "3641351hAANDZ", "utf8", "trim", "11QpPtiO", "1203746loVdNP", "1894269XDOMUL", "513MkAByL", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x577d58;
  };
  return __STRING_ARRAY__();
}
const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("");
function __DECODE_0__(GkpyWW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 360;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GkpyWW, key);
}
if (lines[0] === lines[1] && lines[1] === lines[2]) {
  console["log"](1);
}
if (lines[0] === lines[1] && lines[1] !== lines[2]) {
  console["log"](2);
}
if (lines[0] === lines[2] && lines[0] !== lines[1]) {
  console.log(2);
}
if (lines[1] === lines[2] && lines[0] !== lines[1]) {
  console["log"](2);
}
if (lines[0] !== lines[1] && lines[1] !== lines[2] && lines[2] !== lines[0]) {
  console["log"](3);
}
