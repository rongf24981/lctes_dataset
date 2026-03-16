(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("53916SaESpc") / 1 + parseInt("157078zvIDlS") / 2 * (-parseInt("27DyBnml") / 3) + parseInt("3234396jWeCHW") / 4 + -parseInt("200uWxXxL") / 5 * (parseInt("27102lRFTym") / 6) + parseInt("21BvNMKW") / 7 * (-parseInt("4217384dEtvzf") / 8) + parseInt("5362956xjJwDv") / 9 + parseInt("18042670ItfxQQ") / 10 * (parseInt("11PPRSwv") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 793616);
function euc(a, b) {
  var r0 = a;
  var r1 = b;
  var x0 = 1;
  var x1 = 0;
  var y0 = 0;
  var y1 = 1;
  while (r1 > 0) {
    var q = Math["floor"](r0 / r1);
    var r2 = r0 % r1;
    var x2 = x0 - q * x1;
    var y2 = y0 - q * y1;
    r0 = r1;
    r1 = r2;
    x0 = x1;
    x1 = x2;
    y0 = y1;
    y1 = y2;
  }
  return [x0, y0];
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
var nums = input["split"](" ").map(function (num) {
  return +num;
});
function __DECODE_0__(BhPdAZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 492;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BhPdAZ, key);
}
var a = nums[0];
var b = nums[1];
console["log"](euc(a, b)["join"](" "));
function __STRING_ARRAY__() {
  var _0x937c0 = ["27102lRFTym", "3234396jWeCHW", "18042670ItfxQQ", "200uWxXxL", "utf8", "21BvNMKW", "53916SaESpc", "split", "join", "11PPRSwv", "27DyBnml", "4217384dEtvzf", "readFileSync", "157078zvIDlS", "log", "/dev/stdin", "floor", "5362956xjJwDv", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x937c0;
  };
  return __STRING_ARRAY__();
}
