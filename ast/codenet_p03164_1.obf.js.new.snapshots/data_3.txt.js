(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("215762kCVEXb") / 1 * (parseInt("2yZQfnY") / 2) + -parseInt("3bZwrSi") / 3 * (parseInt("555136bJuKWP") / 4) + -parseInt("103240nMhasU") / 5 * (parseInt("42TyQVdx") / 6) + -parseInt("3368155NGltZi") / 7 * (parseInt("8MXKklH") / 8) + parseInt("5678460OlZwXb") / 9 + -parseInt("8191130SbEENZ") / 10 * (parseInt("11zuftwN") / 11) + parseInt("15278892BWdDBt") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 536345);
var MAX_VALUE = 1000;
var inputRaw = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var rows = inputRaw["trim"]()["split"]("\n");
var row1 = rows[0]["split"](" ")["map"](Number);
var N = row1[0];
var W = row1[1];
var list = rows["slice"](1)["map"](r => r["split"](" ")["map"](Number));
var dp = Array["from"]({
  length: N + 1
}, _ => Array(N * MAX_VALUE + 1).fill(0));
function __STRING_ARRAY__() {
  var _0x1b7f26 = ["map", "103240nMhasU", "from", "min", "42TyQVdx", "215762kCVEXb", "3bZwrSi", "2yZQfnY", "5678460OlZwXb", "log", "8MXKklH", "555136bJuKWP", "utf8", "trim", "11zuftwN", "split", "readFileSync", "fill", "15278892BWdDBt", "8191130SbEENZ", "slice", "3368155NGltZi"];
  __STRING_ARRAY__ = function () {
    return _0x1b7f26;
  };
  return __STRING_ARRAY__();
}
dp[0] = Array(N * MAX_VALUE + 1)["fill"](Infinity);
function __DECODE_0__(KAxUuv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 264;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KAxUuv, key);
}
dp[0][0] = 0;
function solve() {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j <= N * MAX_VALUE; j++) {
      if (list[i][1] <= j) {
        var a = dp[i][j - list[i][1]] + list[i][0];
        var b = dp[i][j];
        dp[i + 1][j] = Math["min"](a, b);
      } else {
        dp[i + 1][j] = dp[i][j];
      }
    }
  }
  var result = 0;
  for (var i = 0; i <= N * MAX_VALUE; i++) {
    if (dp[N][i] <= W) {
      result = i;
    }
  }
  return result;
}
console["log"](solve());
