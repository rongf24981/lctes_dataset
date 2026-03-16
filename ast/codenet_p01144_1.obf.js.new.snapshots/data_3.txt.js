(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("674048LHnvtr") / 1 + -parseInt("2518588YESFPg") / 2 + -parseInt("3CvrgBF") / 3 * (parseInt("1066532becqWc") / 4) + -parseInt("3215710XexyaG") / 5 + -parseInt("7950336DarUuu") / 6 + parseInt("21BXjcNk") / 7 * (-parseInt("3065064pFSugr") / 8) + parseInt("42910470sGsDgN") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 798354);
function __DECODE_0__(ixvrGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 466;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ixvrGH, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x5c2c23 = ["1066532becqWc", "shift", "readFileSync", "map", "3065064pFSugr", "21BXjcNk", "forEach", "trim", "7950336DarUuu", "2518588YESFPg", "utf8", "log", "push", "42910470sGsDgN", "3CvrgBF", "674048LHnvtr", "split", "3215710XexyaG", "/dev/stdin", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x5c2c23;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var nm = Arr["shift"]().split(" ")["map"](Number);
  if (nm[0] == 0 && nm[1] == 0) {
    break;
  }
  var M = nm[1];
  var DP = [];
  for (var i = 0; i < nm[0]; i++) {
    var dp = Arr["shift"]().split(" ").map(Number);
    DP["push"](dp);
  }
  DP["sort"](function (a, b) {
    return b[1] - a[1];
  });
  var sum = 0;
  DP["forEach"](function (v) {
    var d = v[0];
    var p = v[1];
    while (true) {
      if (M == 0 || d == 0) {
        break;
      }
      M--;
      d--;
    }
    sum += d * p;
  });
  console["log"](sum);
}
