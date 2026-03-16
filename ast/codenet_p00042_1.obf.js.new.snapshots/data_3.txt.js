function __STRING_ARRAY__() {
  var _0x35482b = ["utf8", "10QlXlUt", "4233492dynAQo", "2286762xigDwU", "136386BkotvU", "3983XhKIgT", "readFileSync", "4bkLSWY", "push", "332hbvhhn", "max", "log", "shift", "11443641xrgWnu", "13962YnDxVY", "48dnQxBD", "trim", "6603770OZzMGL", "split", "Case ", "/dev/stdin", "map", "2411TPDfnL"];
  __STRING_ARRAY__ = function () {
    return _0x35482b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2411TPDfnL") / 1 * (-parseInt("332hbvhhn") / 2) + -parseInt("2286762xigDwU") / 3 + -parseInt("4bkLSWY") / 4 * (parseInt("6603770OZzMGL") / 5) + parseInt("13962YnDxVY") / 6 * (parseInt("3983XhKIgT") / 7) + parseInt("48dnQxBD") / 8 * (-parseInt("136386BkotvU") / 9) + parseInt("10QlXlUt") / 10 * (parseInt("11443641xrgWnu") / 11) + parseInt("4233492dynAQo") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 943479);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(RYrzNH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 354;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RYrzNH, key);
}
var Arr = input["trim"]()["split"]("\n");
var cnt = 1;
while (true) {
  var W = Arr["shift"]() - 0;
  if (W == 0) {
    break;
  }
  var N = Arr["shift"]() - 0;
  var dp = [];
  for (var y = 0; y < N + 1; y++) {
    dp[y] = [];
    for (var x = 0; x <= W; x++) {
      dp[y][x] = 0;
    }
  }
  var v = [];
  var w = [];
  for (var i = 0; i < N; i++) {
    var arr = Arr.shift()["split"](",")["map"](Number);
    v.push(arr[0]);
    w["push"](arr[1]);
  }
  for (var y = 0; y < N; y++) {
    for (var x = 0; x <= W; x++) {
      if (x - w[y] >= 0) {
        dp[y + 1][x] = Math["max"](dp[y][x], dp[y][x - w[y]] + v[y]);
      } else {
        dp[y + 1][x] = dp[y][x];
      }
    }
  }
  console.log("Case " + cnt + ":");
  cnt++;
  console["log"](dp[N][W]);
  var maxValue = dp[N][W];
  while (maxValue == dp[N][W - 1]) {
    W--;
  }
  console["log"](W);
}
