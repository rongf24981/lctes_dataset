(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1164800nEZpvw") / 1 + -parseInt("964220OwggZg") / 2 + -parseInt("33495GCfeRJ") / 3 + parseInt("7680bWfexg") / 4 * (parseInt("3035uOEJuH") / 5) + -parseInt("4506270YPciJH") / 6 + parseInt("6719853RVjtvx") / 7 + -parseInt("11553888CysLdT") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 601663);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x553a54 = ["readFileSync", "964220OwggZg", "1164800nEZpvw", "map", "utf8", "7680bWfexg", "/dev/stdin", "trim", "11553888CysLdT", "3035uOEJuH", "log", "split", "4506270YPciJH", "6719853RVjtvx", "33495GCfeRJ"];
  __STRING_ARRAY__ = function () {
    return _0x553a54;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Mmswuk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 151;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Mmswuk, key);
}
var [h, r] = input["trim"]()["split"](" ")["map"](Number);
if (r + h == 0) {
  console["log"](0);
} else if (r + h > 0) {
  console["log"](1);
} else {
  console["log"](-1);
}
