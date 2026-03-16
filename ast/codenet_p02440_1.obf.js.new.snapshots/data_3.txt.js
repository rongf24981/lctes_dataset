(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("324605ykpDuf") / 1 + -parseInt("353594grmOXd") / 2 * (-parseInt("6uxreLP") / 3) + parseInt("41268EhovGr") / 4 * (parseInt("55GcqOsy") / 5) + parseInt("2180070ZvZyrK") / 6 + parseInt("2158184MqrdrB") / 7 + parseInt("265808tdfsek") / 8 + -parseInt("5724711ydvwuH") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 211280);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x3ef403 = ["max", "324605ykpDuf", "353594grmOXd", "265808tdfsek", "6uxreLP", "map", "2180070ZvZyrK", "5724711ydvwuH", "2158184MqrdrB", "41268EhovGr", "utf8", "min", "/dev/stdin", "55GcqOsy", "log", "shift", "split", "readFileSync", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x3ef403;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MlWLQB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MlWLQB, key);
}
var a = arr["shift"]()["split"](" ")["map"](Number);
var q = arr["shift"]() - 0;
var s = "";
for (var i = 0; i < q; i++) {
  var [c, b, e] = arr[i]["split"](" ").map(Number);
  var m = a[b];
  if (c == 0) {
    for (var j = b; j < e; j++) {
      m = Math["min"](m, a[j]);
    }
  } else {
    for (var j = b; j < e; j++) {
      m = Math["max"](m, a[j]);
    }
  }
  s += m + "\n";
}
console["log"](s["trim"]());
