(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("300201uBBFJO") / 1 + -parseInt("342466NsgeSg") / 2 * (parseInt("3XSEUxb") / 3) + -parseInt("34372qTWjka") / 4 * (parseInt("395fudfeo") / 5) + -parseInt("6wZaGEJ") / 6 * (-parseInt("1843961XiYZXV") / 7) + -parseInt("1742816sFOMtz") / 8 * (parseInt("18ZTLSpk") / 9) + -parseInt("5675110daAYvE") / 10 + parseInt("24655829mmucUu") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 351366);
var line;
function __STRING_ARRAY__() {
  var _0x13fc4b = ["readline", "395fudfeo", "stdin", "split", "1843961XiYZXV", "close", "3XSEUxb", "5675110daAYvE", "log", "line", "1742816sFOMtz", "300201uBBFJO", "fill", "342466NsgeSg", "18ZTLSpk", "6wZaGEJ", "length", "pow", "34372qTWjka", "24655829mmucUu", "ABC"];
  __STRING_ARRAY__ = function () {
    return _0x13fc4b;
  };
  return __STRING_ARRAY__();
}
var S;
var MOD = Math["pow"](10, 9) + 7;
function __DECODE_0__(LQnEIf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 100;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LQnEIf, key);
}
var readline = require("readline");
var rl = readline.createInterface({
  input: process["stdin"],
  output: process.stdout
});
rl.on("line", function (x) {
  line = x;
});
rl.on("close", function () {
  S = line["split"]("");
  dp = Array(S["length"] + 1);
  for (var i = 0; i <= S.length; i++) {
    dp[i] = Array(4)["fill"](0);
  }
  for (var i = S["length"]; i >= 0; i--) {
    for (var j = 3; j >= 0; j--) {
      if (i === S["length"]) {
        dp[i][j] = j === 3 ? 1 : 0;
      } else {
        dp[i][j] = dp[i + 1][j] * (S[i] === "?" ? 3 : 1);
        if (j < 3 && (S[i] === "?" || S[i] === "ABC"[j])) {
          dp[i][j] += dp[i + 1][j + 1];
        }
        dp[i][j] %= MOD;
      }
    }
  }
  console["log"](dp[0][0]);
});
