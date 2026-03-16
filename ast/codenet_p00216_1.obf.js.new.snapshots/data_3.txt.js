(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("372411TDAFSQ") / 1 + -parseInt("256TqXBcv") / 2 * (-parseInt("8535TymlgO") / 3) + -parseInt("12yBViIJ") / 4 * (-parseInt("492425uaebEl") / 5) + -parseInt("246VOdzAo") / 6 * (parseInt("40565BsbXxX") / 7) + -parseInt("8FccWFO") / 8 * (parseInt("91548DCFwSk") / 9) + -parseInt("1354460dsZTbD") / 10 + parseInt("1001kvRemQ") / 11 * (parseInt("37872xUUNHm") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 191187);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x36919a = ["37872xUUNHm", "/dev/stdin", "map", "utf8", "256TqXBcv", "12yBViIJ", "split", "8FccWFO", "372411TDAFSQ", "40565BsbXxX", "readFileSync", "log", "1001kvRemQ", "8535TymlgO", "246VOdzAo", "length", "91548DCFwSk", "492425uaebEl", "1354460dsZTbD"];
  __STRING_ARRAY__ = function () {
    return _0x36919a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CZrNEE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 182;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CZrNEE, key);
}
var Arr = input.trim()["split"]("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  if (Arr[i] == -1) {
    break;
  }
  var a = Arr[i];
  var sum = 1150;
  if (a > 10 && a <= 20) {
    sum = 1150 + (a - 10) * 125;
  } else if (a > 20 && a <= 30) {
    sum = 2400 + (a - 20) * 140;
  } else if (a > 30) {
    sum = 3800 + (a - 30) * 160;
  }
  console["log"](4280 - sum);
}
