(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("469767JqakDe") / 1 + parseInt("2FkmqUu") / 2 * (-parseInt("1226247pLGrYj") / 3) + -parseInt("392bqLoue") / 4 * (-parseInt("45935JLUcFn") / 5) + -parseInt("6078702jQnARH") / 6 + parseInt("10735382pARvVk") / 7 * (parseInt("8lSoeeD") / 8) + parseInt("3755304DwEbdC") / 9 + -parseInt("9471550ZXWvpB") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 951954);
function main(input) {
  input = input["split"]("\n");
  var tmp = input[0]["split"](" ");
  var N = Number(tmp[0]);
  var A = Number(tmp[1]);
  var x = [0];
  x = x["concat"](input[1].split(" ")["map"](Number));
  var dp = new Array(N + 1);
  for (var i = 0; i <= N; ++i) {
    dp[i] = new Array(N + 1);
    for (var j = 0; j <= N; ++j) {
      dp[i][j] = new Array(A * N + 1)["fill"](0);
    }
  }
  for (var i = 0; i < N; ++i) {
    dp[i][0][0] = 1;
  }
  for (var i = 1; i <= N; ++i) {
    for (var j = 1; j <= i; ++j) {
      for (var k = 1; k <= A * N; ++k) {
        if (k < x[i]) {
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = dp[i - 1][j][k] + dp[i - 1][j - 1][k - x[i]];
        }
      }
    }
  }
  var ans = 0;
  for (var j = 1; j <= N; ++j) {
    ans += dp[N][j][j * A];
  }
  console["log"](ans);
}
function __DECODE_0__(SWdOfv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 283;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SWdOfv, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x206f12 = ["concat", "map", "6078702jQnARH", "45935JLUcFn", "2FkmqUu", "8lSoeeD", "469767JqakDe", "utf8", "1226247pLGrYj", "fill", "log", "3755304DwEbdC", "readFileSync", "split", "9471550ZXWvpB", "10735382pARvVk", "392bqLoue"];
  __STRING_ARRAY__ = function () {
    return _0x206f12;
  };
  return __STRING_ARRAY__();
}
