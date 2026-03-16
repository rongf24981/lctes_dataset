function __STRING_ARRAY__() {
  var _0x2bc971 = ["27056TovxFL", "map", "length", "7RPaNRK", "readFileSync", "   ", "10FgQaao", "1478872IHlZQR", "trim", "403551QwzlCe", "join", "9918whDGnm", "633jZqKHj", "22300mIXeRs", "1779206Fjvsik", "utf8", "replace", "/dev/stdin", "1830NjmmXT", "log", "floor", "65HEafhO"];
  __STRING_ARRAY__ = function () {
    return _0x2bc971;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("27056TovxFL") / 1 + parseInt("1830NjmmXT") / 2 * (parseInt("633jZqKHj") / 3) + -parseInt("22300mIXeRs") / 4 + -parseInt("65HEafhO") / 5 * (-parseInt("9918whDGnm") / 6) + -parseInt("7RPaNRK") / 7 * (parseInt("1478872IHlZQR") / 8) + parseInt("403551QwzlCe") / 9 * (-parseInt("10FgQaao") / 10) + parseInt("1779206Fjvsik") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 113971);
function bomb(y, x) {
  if (N == max) {
    return;
  }
  if (x < 0) {
    x = n - 1;
  }
  if (y < 0) {
    y = n - 1;
  }
  if (x >= n) {
    x = 0;
  }
  if (y >= n) {
    y = 0;
  }
  if (yx[y][x] != -1) {
    bomb(y + 1, x - 1);
  } else {
    yx[y][x] = ("   " + N).slice(-4);
    N++;
    bomb(y + 1, x + 1);
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(UjlJvQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 328;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UjlJvQ, key);
}
var Arr = input["trim"]().split("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  var n = Arr[i];
  var max = n * n + 1;
  if (n == 0) {
    break;
  }
  var yx = [];
  for (var j = 0; j < n; j++) {
    yx[j] = [];
    for (var k = 0; k < n; k++) {
      yx[j][k] = -1;
    }
  }
  var N = 1;
  bomb(Math.floor(n / 2) + 1, Math["floor"](n / 2));
  console["log"](yx["join"]("\n")["replace"](/\,/g, ""));
}
