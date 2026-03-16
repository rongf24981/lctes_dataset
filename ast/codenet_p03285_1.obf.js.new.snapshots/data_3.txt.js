'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1533273OZbSik") / 1 + parseInt("1643786LAwakn") / 2 + -parseInt("1196808VriraH") / 3 + parseInt("2663304ojpMBV") / 4 + parseInt("7114370QtzbGA") / 5 + -parseInt("2209650IxOPMf") / 6 + -parseInt("938RSnlIO") / 7 * (parseInt("164264mtvuyP") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 925233);
function __DECODE_0__(QYHIVs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 282;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QYHIVs, key);
}
function Main(input) {
  let N = Number(input);
  const func = () => {
    if (N < 4) {
      console["log"]("No");
    } else if (N % 4 === 0) {
      console["log"]("Yes");
    } else if (N % 7 === 0) {
      console["log"]("Yes");
    } else {
      N -= 4;
      func();
    }
  };
  func();
}
;
function __STRING_ARRAY__() {
  const _0x364d4f = ["2663304ojpMBV", "Yes", "log", "938RSnlIO", "2209650IxOPMf", "164264mtvuyP", "trim", "1643786LAwakn", "7114370QtzbGA", "readFileSync", "/dev/stdin", "1196808VriraH", "utf8", "1533273OZbSik"];
  __STRING_ARRAY__ = function () {
    return _0x364d4f;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
