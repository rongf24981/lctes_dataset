function __DECODE_0__(DXFuLM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 382;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DXFuLM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("352497yoaSQK") / 1 * (-parseInt("4afrmvQ") / 2) + -parseInt("207399dXYEfL") / 3 + parseInt("3217460MQhDiq") / 4 + -parseInt("5410365SglJUf") / 5 + -parseInt("3095214ZUXXMF") / 6 + parseInt("556577ODucdv") / 7 + -parseInt("5212192YVSnRJ") / 8 * (-parseInt("9xQyYiK") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 573319);
function __STRING_ARRAY__() {
  var _0xe880ae = ["5410365SglJUf", "split", "207399dXYEfL", "5212192YVSnRJ", "4afrmvQ", "reduce", "log", "readFileSync", "3095214ZUXXMF", "352497yoaSQK", "556577ODucdv", "3217460MQhDiq", "/dev/stdin", "map", "9xQyYiK"];
  __STRING_ARRAY__ = function () {
    return _0xe880ae;
  };
  return __STRING_ARRAY__();
}
function plus(a, b) {
  return a + b;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n")["map"](Number);
var sum = 0;
console["log"](Arr["reduce"](plus));
