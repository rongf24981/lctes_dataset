(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("924319AwKeRU") / 1 + -parseInt("2690316xeOsUX") / 2 + -parseInt("1750203AFzmIA") / 3 + parseInt("4pmmYhq") / 4 * (-parseInt("685205WQExES") / 5) + -parseInt("1038PFlYvD") / 6 * (parseInt("36274nYpdiU") / 7) + -parseInt("5955184ncmPue") / 8 + parseInt("33871068BcoxNL") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 981287);
function __STRING_ARRAY__() {
  var _0x1b998d = ["0 0", "min", "forEach", "36274nYpdiU", "2690316xeOsUX", "1038PFlYvD", "shift", "push", "join", "5955184ncmPue", "1750203AFzmIA", "pow", "split", "924319AwKeRU", "4pmmYhq", "685205WQExES", "33871068BcoxNL"];
  __STRING_ARRAY__ = function () {
    return _0x1b998d;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __DECODE_0__(kEjtis, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 361;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kEjtis, key);
}
while (true) {
  var nm = arr["shift"]().split(" ");
  if (nm["join"](" ") == "0 0") {
    break;
  }
  var n = nm[0];
  var m = nm[1];
  var M = [];
  for (var i = 0; i < m; i++) {
    M["push"](arr["shift"]() - 0);
  }
  var N = [];
  for (var i = 0; i < n; i++) {
    N.push(arr["shift"]() - 0);
  }
  var dp = [];
  for (var i = 0; i <= n; i++) {
    dp[i] = [];
    for (var j = 0; j <= 255; j++) {
      dp[i][j] = Infinity;
    }
  }
  dp[0][128] = 0;
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j <= 255; j++) {
      if (dp[i - 1][j] != Infinity) {
        for (var k = 0; k < m; k++) {
          var jm = j + M[k];
          if (jm < 0) {
            jm = 0;
          }
          if (jm > 255) {
            jm = 255;
          }
          dp[i][jm] = Math["min"](dp[i][jm], dp[i - 1][j] + Math["pow"](N[i - 1] - jm, 2));
        }
      }
    }
  }
  var min = Infinity;
  dp[n]["forEach"](function (v) {
    min = Math.min(min, v);
  });
  console.log(min);
}
