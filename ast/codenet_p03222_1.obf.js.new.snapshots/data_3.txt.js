function __DECODE_0__(ilIqnX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 293;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ilIqnX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("34885zckhbX") / 1 + parseInt("1658960KJJbXm") / 2 + -parseInt("1288449DlVrKb") / 3 + -parseInt("4348460rWTGvo") / 4 + parseInt("2766725TYDsCX") / 5 + -parseInt("30AAFqWC") / 6 * (parseInt("85827jiQfqf") / 7) + parseInt("6723832thHDIS") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 610516);
function Main(input) {
  input = input.split(" ")["map"](a => ~~a);
  var H = input[0];
  var W = input[1];
  var K = input[2];
  var mod = 1000000007;
  if (W == 1) {
    return 1;
  }
  var validAmidaList = Array(2 ** (W - 1)).fill(0).map((a, b) => b).map(a => a.toString(2)).filter(a => !/11/["test"](a))["map"](a => "000000" + a)["map"](a => a.slice(1 - W))["map"](a => "0" + a + "0");
  var dp = Array(H + 1);
  for (var i = 0; i <= H; i++) {
    dp[i] = Array(W)["fill"](0);
  }
  dp[0][0] = 1;
  for (var i = 1; i <= H; i++) {
    validAmidaList["forEach"](function (elem) {
      for (var j = 0; j < W; j++) {
        ({
          "10": a => dp[i][j] += dp[i - 1][j - 1],
          "01": a => dp[i][j] += dp[i - 1][j + 1],
          "00": a => dp[i][j] += dp[i - 1][j]
        })[elem[j] + elem[j + 1]]();
        dp[i][j] %= mod;
      }
    });
  }
  return dp[H][K - 1];
}
if (typeof require !== "undefined") {
  console["log"](Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
}
function __STRING_ARRAY__() {
  var _0x5648a5 = ["fill", "1658960KJJbXm", "log", "test", "85827jiQfqf", "map", "utf8", "1288449DlVrKb", "000000", "2766725TYDsCX", "4348460rWTGvo", "6723832thHDIS", "readFileSync", "forEach", "/dev/stdin", "30AAFqWC", "34885zckhbX"];
  __STRING_ARRAY__ = function () {
    return _0x5648a5;
  };
  return __STRING_ARRAY__();
}
