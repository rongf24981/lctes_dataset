(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("819708hukmrD") / 1 + -parseInt("4oLlTCl") / 2 * (parseInt("3144ceayHx") / 3) + -parseInt("543068oWOxaJ") / 4 * (parseInt("25HeuTEf") / 5) + parseInt("2352372iVVKTd") / 6 + -parseInt("692930JywQlv") / 7 + parseInt("8prpFRj") / 8 * (parseInt("669879IRxZTS") / 9) + parseInt("17590520FtTYhq") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 625916);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(gLFLVu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gLFLVu, key);
}
function __STRING_ARRAY__() {
  var _0x14d42d = ["kenjiro", "shift", "4oLlTCl", "3144ceayHx", "692930JywQlv", "map", "readFileSync", "utf8", "819708hukmrD", "split", "log", "17590520FtTYhq", "25HeuTEf", "543068oWOxaJ", "even", "2352372iVVKTd", "8prpFRj", "floor", "669879IRxZTS"];
  __STRING_ARRAY__ = function () {
    return _0x14d42d;
  };
  return __STRING_ARRAY__();
}
var arr = input.trim().split("\n");
var [h1, h2] = arr["shift"]()["split"](" ")["map"](Number);
var [k1, k2] = arr["shift"]().split(" ")["map"](Number);
var [a, b, c, d] = arr["shift"]()["split"](" ")["map"](Number);
var h = h1 * a + h2 * b + Math["floor"](h1 / 10) * c + Math["floor"](h2 / 20) * d;
var k = k1 * a + k2 * b + Math.floor(k1 / 10) * c + Math.floor(k2 / 20) * d;
if (h == k) {
  console["log"]("even");
} else if (h > k) {
  console["log"]("hiroshi");
} else {
  console["log"]("kenjiro");
}
