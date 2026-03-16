(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("13321FOwPke") / 1 * (parseInt("118ZdBQtS") / 2) + -parseInt("1205466neIXzU") / 3 * (-parseInt("8unvrum") / 4) + parseInt("1423165TPwyen") / 5 * (-parseInt("12nyqdFY") / 6) + parseInt("11756206SVADos") / 7 + -parseInt("3774160slynxb") / 8 + -parseInt("7659954lFAJdi") / 9 + -parseInt("5327910DZBimC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 844108);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var nk = arr.shift()["split"](" ")["map"](Number);
var n = nk[0];
var k = nk[1];
var N = [];
for (var i = 0; i < n; i++) {
  N["push"](arr["shift"]()["split"](" ")["map"](Number));
}
var dp = [];
function __STRING_ARRAY__() {
  var _0x49cede = ["map", "7659954lFAJdi", "1205466neIXzU", "trim", "max", "5327910DZBimC", "forEach", "8unvrum", "1423165TPwyen", "118ZdBQtS", "/dev/stdin", "split", "readFileSync", "13321FOwPke", "shift", "11756206SVADos", "push", "3774160slynxb", "12nyqdFY", "log"];
  __STRING_ARRAY__ = function () {
    return _0x49cede;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i <= 10; i++) {
  dp[i] = [];
}
var DP = [];
for (var i = 0; i <= 10; i++) {
  DP[i] = [];
}
N.forEach(function (v) {
  var c = v[0];
  var g = v[1];
  dp[g]["push"](c);
});
dp["forEach"](function (v, i) {
  v.sort(function (a, b) {
    return b - a;
  });
  v.forEach(function (value, j) {
    if (j == 0) {
      DP[i][j] = dp[i][j];
    }
    if (j > 0) {
      dp[i][j] += dp[i][j - 1];
      DP[i][j] = dp[i][j] + (j + 1) * j;
    }
  });
});
var dp = [];
function __DECODE_0__(UiThCI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 328;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UiThCI, key);
}
for (var i = 0; i <= n; i++) {
  dp[i] = 0;
}
function bomb(cnt, start, sum) {
  dp[cnt] = Math["max"](dp[cnt], sum);
  if (sum == k) {
    return;
  }
  for (var i = start; i < DP.length; i++) {
    DP[i]["forEach"](function (v, index) {
      bomb(cnt + (index + 1), i + 1, sum + v);
    });
  }
}
bomb(0, 0, 0);
console["log"](dp[k]);
