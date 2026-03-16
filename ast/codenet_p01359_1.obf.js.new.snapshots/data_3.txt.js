function __DECODE_0__(YbWdvy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YbWdvy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("104008rmNIGx") / 1 + parseInt("9562KLRSjJ") / 2 * (-parseInt("48tLPlyo") / 3) + parseInt("133528nlZASY") / 4 + parseInt("39830zmsDhv") / 5 * (parseInt("18HbcSYz") / 6) + parseInt("754950pepqBr") / 7 + -parseInt("394952phrCGA") / 8 * (parseInt("9bwAPCq") / 9) + parseInt("1706790NnTeOl") / 10 * (parseInt("11ceKMQc") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 105936);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var [n, q] = arr["shift"]()["split"](" ")["map"](Number);
  if (n == 0 && q == 0) {
    break;
  }
  var g = [];
  for (var i = 0; i < n; i++) {
    var [e, ey, wy] = arr["shift"]()["split"](" ");
    [ey, wy] = [ey - 0, wy - 0];
    g["push"]([e, wy - ey, wy]);
  }
  for (var i = 0; i < q; i++) {
    var n = arr["shift"]() - 0;
    var ans = "Unknown";
    for (var j = 0; j < g["length"]; j++) {
      var a = g[j][1];
      var b = g[j][2];
      if (a < n && n <= b) {
        ans = [g[j][0], n - a]["join"](" ");
      }
    }
    console["log"](ans);
  }
}
function __STRING_ARRAY__() {
  var _0x13a1bb = ["trim", "map", "39830zmsDhv", "133528nlZASY", "18HbcSYz", "log", "utf8", "48tLPlyo", "9562KLRSjJ", "754950pepqBr", "394952phrCGA", "11ceKMQc", "shift", "1706790NnTeOl", "push", "Unknown", "9bwAPCq", "join", "split", "length", "104008rmNIGx"];
  __STRING_ARRAY__ = function () {
    return _0x13a1bb;
  };
  return __STRING_ARRAY__();
}
