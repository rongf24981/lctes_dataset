(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("373bdgWFs") / 1 * (-parseInt("5708TQMIZF") / 2) + parseInt("365151AxlWtn") / 3 * (parseInt("8zaIPvh") / 4) + -parseInt("366250FjvnfZ") / 5 * (-parseInt("48jQJvie") / 6) + -parseInt("1070090dxozBr") / 7 * (parseInt("24AdNXMj") / 8) + parseInt("8368362RbfDyr") / 9 + -parseInt("11189850mdLtmZ") / 10 + parseInt("16215067CaRaOg") / 11 * (parseInt("12seZnnV") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 591212);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var inputArray = input["split"](" ");
function __STRING_ARRAY__() {
  var _0x381eba = ["11189850mdLtmZ", "16215067CaRaOg", "373bdgWFs", "8zaIPvh", "split", "365151AxlWtn", "1070090dxozBr", "/dev/stdin", "366250FjvnfZ", "utf8", "8368362RbfDyr", "log", "48jQJvie", "24AdNXMj", "5708TQMIZF", "12seZnnV"];
  __STRING_ARRAY__ = function () {
    return _0x381eba;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XHfLYs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 437;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XHfLYs, key);
}
var a = inputArray[0];
var b = inputArray[1];
var c = inputArray[2];
var d = inputArray[3];
var result = a * b > c * d ? a * b : c * d;
console["log"](result);
