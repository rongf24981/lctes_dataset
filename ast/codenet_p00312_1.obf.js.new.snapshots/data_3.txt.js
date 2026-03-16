function __STRING_ARRAY__() {
  var _0x128610 = ["3522CcLHjx", "3694688ZXYVYU", "/dev/stdin", "101800FVXBuW", "15nApwLk", "5245ORxskW", "17890INaJFc", "427416nwFZXu", "log", "3612870qIPbQP", "utf8", "trim", "split", "2736762zilpmj"];
  __STRING_ARRAY__ = function () {
    return _0x128610;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("427416nwFZXu") / 1 + -parseInt("17890INaJFc") / 2 + parseInt("15nApwLk") / 3 * (parseInt("101800FVXBuW") / 4) + parseInt("5245ORxskW") / 5 * (-parseInt("3522CcLHjx") / 6) + parseInt("2736762zilpmj") / 7 + parseInt("3694688ZXYVYU") / 8 + parseInt("3612870qIPbQP") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 329358);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(xymlJQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 411;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xymlJQ, key);
}
var [D, L] = input["trim"]()["split"](" ").map(Number);
var amari = D % L;
var yakusuu = (D - amari) / L;
console["log"](yakusuu + amari);
