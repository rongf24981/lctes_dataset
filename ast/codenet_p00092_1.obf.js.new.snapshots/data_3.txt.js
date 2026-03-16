(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1097231wTMofz") / 1 + -parseInt("1706vBdxXN") / 2 * (parseInt("603ezmmUx") / 3) + -parseInt("92xDgOlm") / 4 * (parseInt("194695rZQhrC") / 5) + -parseInt("4438194BKuRkT") / 6 * (parseInt("7MtCShR") / 7) + parseInt("10326392ssPzsV") / 8 + -parseInt("9auzTkm") / 9 * (parseInt("3104410xfDCAr") / 10) + parseInt("29101424FqksyC") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 721962);
function __STRING_ARRAY__() {
  var _0x3fe675 = ["readFileSync", "/dev/stdin", "92xDgOlm", "min", "max", "1706vBdxXN", "shift", "603ezmmUx", "9auzTkm", "1097231wTMofz", "29101424FqksyC", "push", "utf8", "4438194BKuRkT", "log", "split", "10326392ssPzsV", "194695rZQhrC", "7MtCShR", "3104410xfDCAr"];
  __STRING_ARRAY__ = function () {
    return _0x3fe675;
  };
  return __STRING_ARRAY__();
}
function seach(y, x) {
  if (yx[y][x] == "*") {
    return 0;
  }
  var dy = [-1, -1, 0];
  var dx = [-1, 0, -1];
  var min = n;
  for (var i = 0; i < 3; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0 || yy >= n || xx < 0 || xx >= n) {
      return 1;
    }
    min = Math["min"](min, yx[yy][xx]);
  }
  return min + 1;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(GmMwKP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 417;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GmMwKP, key);
}
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var max = 0;
  var yx = [];
  for (var i = 0; i < n; i++) {
    var str = Arr["shift"]();
    yx["push"](str["split"](""));
  }
  for (var y = 0; y < n; y++) {
    for (var x = 0; x < n; x++) {
      yx[y][x] = seach(y, x);
      max = Math["max"](max, yx[y][x]);
    }
  }
  console["log"](max);
}
