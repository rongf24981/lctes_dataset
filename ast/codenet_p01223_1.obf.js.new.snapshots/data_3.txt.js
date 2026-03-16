(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("7dgCnCV") / 1 * (parseInt("145502fztZId") / 2) + parseInt("4539309eNGrhh") / 3 + -parseInt("68gVdWuZ") / 4 * (-parseInt("3265AoUGmS") / 5) + -parseInt("12AMwuWD") / 6 * (-parseInt("4828761RmXlBr") / 7) + parseInt("10959088EqLRxM") / 8 + -parseInt("1902798PmmQpF") / 9 + -parseInt("37602430fDOQxW") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 811328);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x29c06b = ["max", "4539309eNGrhh", "readFileSync", "min", "7dgCnCV", "trim", "log", "split", "1902798PmmQpF", "12AMwuWD", "10959088EqLRxM", "68gVdWuZ", "utf8", "abs", "145502fztZId", "37602430fDOQxW", "/dev/stdin", "4828761RmXlBr", "3265AoUGmS", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x29c06b;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]().split("\n");
var t = Arr["shift"]() - 0;
function __DECODE_0__(tuURmE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 395;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tuURmE, key);
}
for (var i = 0; i < t; i++) {
  var n = Arr.shift() - 0;
  var arr = Arr["shift"]()["split"](" ").map(Number);
  var max = 0;
  var min = 0;
  var m = arr[0];
  for (var j = 1; j < n; j++) {
    max = Math["max"](arr[j] - m, max);
    min = Math["min"](arr[j] - m, min);
    m = arr[j];
  }
  console["log"](max + " " + Math["abs"](min));
}
