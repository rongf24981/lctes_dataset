(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("639030NRgRbz") / 1 + parseInt("60010HwsOCw") / 2 * (-parseInt("45ZzNHmd") / 3) + parseInt("1198764BcDWDx") / 4 + -parseInt("3087005XdJdPb") / 5 + parseInt("3054AZntrt") / 6 * (parseInt("7273zugyCE") / 7) + parseInt("5294120lBpXOk") / 8 + -parseInt("5942133QcFjZl") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 401624);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n")["map"](Number);
function __DECODE_0__(uqHfNo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 369;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uqHfNo, key);
}
function __STRING_ARRAY__() {
  var _0x45871a = ["utf8", "5294120lBpXOk", "split", "trim", "5942133QcFjZl", "3054AZntrt", "3087005XdJdPb", "639030NRgRbz", "45ZzNHmd", "map", "60010HwsOCw", "push", "7273zugyCE", "/dev/stdin", "1198764BcDWDx"];
  __STRING_ARRAY__ = function () {
    return _0x45871a;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = arr.shift();
  if (n == 0) {
    break;
  }
  var coin = [""];
  for (var i = 1; i <= 17; i++) {
    coin["push"](i * i);
  }
  var dp = [];
  for (var i = 0; i <= 17; i++) {
    dp[i] = [];
    for (var j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = 1;
  for (var i = 1; i <= 17; i++) {
    for (var j = 0; j <= n; j++) {
      var k = 0;
      while (coin[i] * k + j <= n) {
        dp[i][coin[i] * k + j] += dp[i - 1][j];
        k++;
      }
    }
  }
  console.log(dp[17][n]);
}
