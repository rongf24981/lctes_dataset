'use strict';

function __DECODE_0__(pnxhZA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 482;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pnxhZA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("736150hMBNuW") / 1 + -parseInt("129084oOCMUM") / 2 + -parseInt("3750969tEmeCw") / 3 * (parseInt("4qKnGqm") / 4) + -parseInt("835865dyBFec") / 5 * (parseInt("30RcQVkw") / 6) + -parseInt("316946rFFCCv") / 7 * (-parseInt("184jZpvAP") / 8) + parseInt("9594HcEpHL") / 9 * (parseInt("1310FrUVEL") / 10) + -parseInt("11eJyNkx") / 11 * (-parseInt("13958268TjZTPM") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 929649);
function Main(input) {
  input = input.trim();
  input = input["replace"](/\s+/, "").split("");
  var height = input["length"];
  var one = 0;
  var zero = 0;
  while (input["length"]) {
    if (input.pop() === "0") {
      zero++;
    } else {
      one++;
    }
  }
  console.log(Math.min(zero, one) * 2);
}
function __STRING_ARRAY__() {
  var _0x2e9918 = ["replace", "4qKnGqm", "11eJyNkx", "utf8", "13958268TjZTPM", "129084oOCMUM", "736150hMBNuW", "835865dyBFec", "316946rFFCCv", "3750969tEmeCw", "30RcQVkw", "1310FrUVEL", "length", "/dev/stdin", "184jZpvAP", "9594HcEpHL"];
  __STRING_ARRAY__ = function () {
    return _0x2e9918;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
