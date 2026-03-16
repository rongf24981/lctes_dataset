function __DECODE_0__(ZxQsoT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 384;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZxQsoT, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1794776lUiFtE") / 1 + parseInt("3184530Ambtvx") / 2 + parseInt("24651bQBkrD") / 3 * (parseInt("544VOgftj") / 4) + parseInt("20bTPbRm") / 5 * (-parseInt("1089186IfrMCe") / 6) + parseInt("637fVnVmZ") / 7 * (parseInt("54512qdBRZI") / 8) + -parseInt("3162564nBLEJM") / 9 + -parseInt("278470xPPgKC") / 10 * (-parseInt("176MFXtLZ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 903107);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1a75a7 = ["278470xPPgKC", "176MFXtLZ", "3162564nBLEJM", "1089186IfrMCe", "637fVnVmZ", "54512qdBRZI", "24651bQBkrD", "min", "utf8", "/dev/stdin", "shift", "20bTPbRm", "split", "push", "3184530Ambtvx", "map", "1794776lUiFtE", "max", "544VOgftj"];
  __STRING_ARRAY__ = function () {
    return _0x1a75a7;
  };
  return __STRING_ARRAY__();
}
Arr["push"]("");
var n = Arr["shift"]() - 0;
for (var I = 0; I < n; I++) {
  var yx = [];
  var dp = [];
  for (var i = 0; i < 5; i++) {
    var v = Arr["shift"]()["split"](" ")["map"](Number);
    yx.push(v);
    dp["push"]([]);
  }
  for (var y = 0; y < 5; y++) {
    for (var x = 0; x < 5; x++) {
      if (y == 0) {
        dp[y][x] = yx[y][x] == 1 ? 1 : 0;
      } else {
        dp[y][x] = yx[y][x] == 1 ? dp[y - 1][x] + 1 : 0;
      }
    }
  }
  var max = 0;
  for (var y = 0; y < 5; y++) {
    for (var i = 0; i < 5; i++) {
      for (var j = i; j < 5; j++) {
        var min = Infinity;
        for (var k = i; k <= j; k++) {
          min = Math["min"](min, dp[y][k]);
        }
        max = Math["max"](max, min * (j - i + 1));
      }
    }
  }
  console.log(max);
  Arr["shift"]();
}
