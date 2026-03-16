function __DECODE_0__(XzgwmZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XzgwmZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2fSFDmh") / 1 * (parseInt("148992YBHlKW") / 2) + parseInt("18195JsYjFv") / 3 * (parseInt("60eRcsdC") / 4) + parseInt("25DYYBNw") / 5 * (parseInt("577386JMuwMv") / 6) + parseInt("7126xFuBtl") / 7 * (-parseInt("2072lzziOZ") / 8) + -parseInt("5459454laOXVw") / 9 + -parseInt("2176090yvGxrE") / 10 + parseInt("11024871spkVZd") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 337522);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x16a053 = ["2fSFDmh", "log", "2072lzziOZ", "5459454laOXVw", "readFileSync", "60eRcsdC", "148992YBHlKW", "2176090yvGxrE", "11024871spkVZd", "7126xFuBtl", "map", "trim", "18195JsYjFv", "floor", "push", "25DYYBNw", "shift", "utf8", "split", "577386JMuwMv"];
  __STRING_ARRAY__ = function () {
    return _0x16a053;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var nmp = Arr["shift"]()["split"](" ")["map"](Number);
  if (nmp[0] == 0 && nmp[1] == 0 && nmp[2] == 0) {
    break;
  }
  var n = nmp[0];
  var m = nmp[1] - 1;
  var p = nmp[2];
  var arr = [];
  var sum = 0;
  for (var i = 0; i < n; i++) {
    var v = Arr["shift"]() - 0;
    arr["push"](v);
    sum += v * 100;
  }
  sum = sum * (100 - p) / 100;
  var ans = 0;
  if (arr[m] != 0) {
    ans = Math["floor"](sum / arr[m]);
  }
  console["log"](ans);
}
