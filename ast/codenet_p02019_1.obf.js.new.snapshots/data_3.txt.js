(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1onoChf") / 1 * (-parseInt("159812TaOFVq") / 2) + parseInt("822468UHikDP") / 3 * (parseInt("4eKhzDx") / 4) + -parseInt("20dDPmqz") / 5 * (parseInt("238116FvwWow") / 6) + parseInt("302169KlComf") / 7 + -parseInt("58256YtYzFZ") / 8 * (-parseInt("117OfHfel") / 9) + -parseInt("43360FRMnBT") / 10 * (-parseInt("319FyNGEe") / 11) + -parseInt("1114152UpEyUI") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 206237);
function __STRING_ARRAY__() {
  var _0x494ba3 = ["822468UHikDP", "43360FRMnBT", "4eKhzDx", "map", "302169KlComf", "159812TaOFVq", "split", "238116FvwWow", "1114152UpEyUI", "utf8", "117OfHfel", "trim", "1onoChf", "20dDPmqz", "319FyNGEe", "58256YtYzFZ"];
  __STRING_ARRAY__ = function () {
    return _0x494ba3;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(hmoaZx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 353;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hmoaZx, key);
}
var [n, a, b, c] = input["trim"]()["split"](" ")["map"](Number);
console.log(n - a - b + c);
