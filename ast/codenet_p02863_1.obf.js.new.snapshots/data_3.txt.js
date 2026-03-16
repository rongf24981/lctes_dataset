(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3syJbFT") / 1 * (-parseInt("20454ZHWouB") / 2) + -parseInt("557922yWtELS") / 3 * (-parseInt("20lNEfmw") / 4) + parseInt("5556275SYDpae") / 5 + parseInt("6TGXscf") / 6 * (-parseInt("1516291yWgGqs") / 7) + -parseInt("4939984cQuGwd") / 8 * (parseInt("18zZxqBM") / 9) + -parseInt("100bUgVus") / 10 * (parseInt("1307944VuDshM") / 11) + parseInt("14533320QdpMKP") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 642267);
function __STRING_ARRAY__() {
  var _0x26b5f5 = ["1516291yWgGqs", "14533320QdpMKP", "split", "4939984cQuGwd", "map", "from", "3syJbFT", "5556275SYDpae", "sort", "utf8", "20lNEfmw", "max", "6TGXscf", "log", "1307944VuDshM", "18zZxqBM", "/dev/stdin", "trim", "20454ZHWouB", "push", "557922yWtELS", "100bUgVus", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x26b5f5;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["trim"]()["split"]("\n")["map"](function (x) {
    return x["split"](" ");
  });
  var N = parseInt(input[0][0], 10);
  var T = parseInt(input[0][1], 10);
  var arr_AB = [];
  for (var i = 0; i < N; i++) {
    arr_AB["push"](input[i + 1]["map"](e => parseInt(e, 10)));
  }
  arr_AB["sort"]((a, b) => a[0] - b[0]);
  var dp = [];
  var Ai;
  var Bi;
  dp["push"](Array["from"]({
    length: T
  }, () => [0, 0]));
  for (var i = 0; i < N; i++) {
    dp["push"]([]);
    Ai = arr_AB[i][0];
    Bi = arr_AB[i][1];
    for (var j = 0; j < T; j++) {
      dp[i + 1].push([0, 0]);
      if (Ai <= j) {
        dp[i + 1][j][0] = Math["max"](dp[i][j][0], dp[i][j - Ai][0] + Bi);
      } else {
        dp[i + 1][j][0] = dp[i][j][0];
      }
      dp[i + 1][j][1] = Math.max(dp[i][j][1], dp[i][j][0] + Bi);
    }
  }
  console["log"](dp[N][T - 1][1]);
}
function __DECODE_0__(liOHbU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 409;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liOHbU, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
