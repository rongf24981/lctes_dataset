'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1026594cpFYzo") / 1 + -parseInt("250782dZqyIv") / 2 * (-parseInt("3QjVBxD") / 3) + -parseInt("6204BvZFwS") / 4 * (parseInt("850GEUGCf") / 5) + parseInt("8836236gzyMrv") / 6 + -parseInt("1866921jQtDgj") / 7 * (parseInt("40ybStBk") / 8) + parseInt("36NZSrRd") / 9 * (parseInt("1257040JRpusr") / 10) + parseInt("16158593tXaMhs") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 946097);
function __DECODE_0__(TlIAII, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 415;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TlIAII, key);
}
function __STRING_ARRAY__() {
  const _0xb69c34 = ["3QjVBxD", "/dev/stdin", "log", "1257040JRpusr", "6204BvZFwS", "250782dZqyIv", "1026594cpFYzo", "readFileSync", "trim", "16158593tXaMhs", "36NZSrRd", "1866921jQtDgj", "split", "8836236gzyMrv", "ceil", "850GEUGCf", "40ybStBk"];
  __STRING_ARRAY__ = function () {
    return _0xb69c34;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  const tmp = input["trim"]()["split"](" ");
  const H = parseInt(tmp[0]);
  const W = parseInt(tmp[1]);
  let result = 0;
  if (H % 2 != 0 && W % 2 != 0) {
    result = Math["ceil"](H * W / 2);
  } else {
    result = H * W / 2;
  }
  console["log"](result);
  return result;
};
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
