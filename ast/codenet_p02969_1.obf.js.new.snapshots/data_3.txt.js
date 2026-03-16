'use strict';

function __STRING_ARRAY__() {
  var _0x1bdc00 = ["2251809qmjWdu", "5XTGSjM", "3162297TsWmXf", "412904XCksbj", "9167945KZYhgg", "190056UACcHY", "log", "360RUnnRw", "8431344euAWME", "utf8", "4657176HmHSMm", "455NEmwQF"];
  __STRING_ARRAY__ = function () {
    return _0x1bdc00;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5XTGSjM") / 1 * (parseInt("412904XCksbj") / 2) + -parseInt("3162297TsWmXf") / 3 + -parseInt("4657176HmHSMm") / 4 + -parseInt("9167945KZYhgg") / 5 + -parseInt("8431344euAWME") / 6 + parseInt("455NEmwQF") / 7 * (-parseInt("190056UACcHY") / 8) + -parseInt("2251809qmjWdu") / 9 * (-parseInt("360RUnnRw") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 973565);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(HFVYgV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HFVYgV, key);
}
var r = parseInt(input, 10);
console["log"](r * 3 * r);
