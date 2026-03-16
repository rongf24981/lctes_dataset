function __DECODE_0__(GAOJuP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 400;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GAOJuP, key);
}
function __STRING_ARRAY__() {
  var _0x58c038 = ["350dhgHWf", "3917910TPecRN", "readFileSync", "5cOubRW", "542946hfQEsw", "map", "1032644gBPbEt", "log", "shift", "297039gecMUY", "trim", "utf8", "/dev/stdin", "1132262UnNRum", "20888LHALeN", "1017uOJsbp", "split", "62154sGuHdU"];
  __STRING_ARRAY__ = function () {
    return _0x58c038;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("542946hfQEsw") / 1 + -parseInt("1132262UnNRum") / 2 + -parseInt("297039gecMUY") / 3 + parseInt("1032644gBPbEt") / 4 * (parseInt("5cOubRW") / 5) + -parseInt("62154sGuHdU") / 6 * (parseInt("350dhgHWf") / 7) + -parseInt("20888LHALeN") / 8 * (-parseInt("1017uOJsbp") / 9) + parseInt("3917910TPecRN") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 304847);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var a = arr["shift"]().split(" ")["map"](Number);
var min = Infinity;
var ans = -1;
for (var i = 0; i < n; i++) {
  if (min > a[i]) {
    ans = i;
    min = a[i];
  }
}
console["log"](ans + 1);
