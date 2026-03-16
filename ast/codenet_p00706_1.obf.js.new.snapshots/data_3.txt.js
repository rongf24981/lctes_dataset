function __DECODE_0__(wYvbwa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wYvbwa, key);
}
function __STRING_ARRAY__() {
  var _0x3dd6ca = ["3681475EfZfFN", "max", "split", "/dev/stdin", "6wKnycR", "50alRxWx", "278666qLqzCR", "598989bOLVgy", "trim", "268716CKGXzt", "145144kQoINt", "14962662ufANnw", "shift", "map", "4815768ppYKOd", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x3dd6ca;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("268716CKGXzt") / 1 + -parseInt("278666qLqzCR") / 2 + parseInt("598989bOLVgy") / 3 + -parseInt("145144kQoINt") / 4 * (parseInt("50alRxWx") / 5) + -parseInt("6wKnycR") / 6 * (parseInt("3681475EfZfFN") / 7) + -parseInt("4815768ppYKOd") / 8 + parseInt("14962662ufANnw") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 500808);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var wh = arr["shift"]()["split"](" ")["map"](Number);
  var w = wh[0];
  var h = wh[1];
  var XY = [];
  for (var i = 0; i < w; i++) {
    XY[i] = [];
    for (var j = 0; j < h; j++) {
      XY[i][j] = 0;
    }
  }
  while (n--) {
    var xy = arr.shift().split(" ")["map"](Number);
    XY[xy[0] - 1][xy[1] - 1] = 1;
  }
  var st = arr["shift"]()["split"](" ").map(Number);
  var s = st[0];
  var t = st[1];
  var max = 0;
  for (var i = 0; i <= w - s; i++) {
    for (var j = 0; j <= h - t; j++) {
      var sum = 0;
      for (var x = 0; x < s; x++) {
        for (var y = 0; y < t; y++) {
          sum += XY[i + x][j + y];
        }
      }
      max = Math["max"](sum, max);
    }
  }
  console.log(max);
}
