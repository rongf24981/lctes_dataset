function __DECODE_0__(iQpVHc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iQpVHc, key);
}
function __STRING_ARRAY__() {
  var _0x3edeed = ["3392664gjwrxM", "1058934bYEvKd", "20koqBFg", "22292982aVOGzo", "trim", "readFileSync", "add", "log", "size", "2466778WWyosE", "/dev/stdin", "2331350pRmaDn", "12PlhYAY", "map", "shift", "split", "669042MjOssp", "3642290lGcMFc"];
  __STRING_ARRAY__ = function () {
    return _0x3edeed;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("669042MjOssp") / 1 + -parseInt("2466778WWyosE") / 2 + -parseInt("1058934bYEvKd") / 3 * (-parseInt("20koqBFg") / 4) + parseInt("3642290lGcMFc") / 5 * (parseInt("12PlhYAY") / 6) + parseInt("2331350pRmaDn") / 7 + parseInt("3392664gjwrxM") / 8 + -parseInt("22292982aVOGzo") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 937594);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr.shift() - 0;
var a = arr["shift"]()["split"](" ")["map"](Number);
var s = new Set();
a.forEach(v => s["add"](v));
console["log"](s["size"]);
