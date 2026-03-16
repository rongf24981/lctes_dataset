function __DECODE_0__(cHCfCu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 323;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cHCfCu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("68528oRwxnk") / 1 + -parseInt("956238xqycsR") / 2 + parseInt("75sSEIZU") / 3 * (parseInt("34024hDApoZ") / 4) + -parseInt("5ooCtKQ") / 5 * (-parseInt("3590934PzCAig") / 6) + -parseInt("1124354CXeNlD") / 7 + parseInt("424dXURzL") / 8 * (-parseInt("195444OifzjT") / 9) + -parseInt("3170kgdUlP") / 10 * (-parseInt("52283AUVtdV") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 596679);
function __STRING_ARRAY__() {
  var _0x39c0b6 = ["1124354CXeNlD", "max", "utf8", "map", "min", "/dev/stdin", "956238xqycsR", "length", "195444OifzjT", "1 1", "3170kgdUlP", "424dXURzL", "trim", "3590934PzCAig", "5ooCtKQ", "split", "34024hDApoZ", "52283AUVtdV", "readFileSync", "75sSEIZU", "68528oRwxnk", "log"];
  __STRING_ARRAY__ = function () {
    return _0x39c0b6;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var N = Arr.shift() - 0;
  if (N == 0) {
    break;
  }
  if (N == 1) {
    console["log"]("1 1");
    continue;
  }
  var arr = [];
  arr[0] = [0, 0];
  for (var i = 0; i < N - 1; i++) {
    var nm = Arr.shift()["split"](" ")["map"](Number);
    var n = nm[0];
    var m = nm[1];
    var x = 0;
    var y = 0;
    if (m == 0) {
      x = -1;
    }
    if (m == 1) {
      y = -1;
    }
    if (m == 2) {
      x = 1;
    }
    if (m == 3) {
      y = 1;
    }
    arr[i + 1] = [arr[n][0] + x, arr[n][1] + y];
  }
  var xA = 0;
  var xZ = 0;
  var yA = 0;
  var yZ = 0;
  for (var i = 0; i < arr["length"]; i++) {
    xA = Math["min"](xA, arr[i][0]);
    xZ = Math["max"](xZ, arr[i][0]);
    yA = Math["min"](yA, arr[i][1]);
    yZ = Math.max(yZ, arr[i][1]);
  }
  console["log"](xZ - xA + 1 + " " + (yZ - yA + 1));
}
